import { createClient } from '@supabase/supabase-js';
import { NextResponse, NextRequest } from 'next/server';
import { isRateLimited, recordFailedAttempt, recordSuccessfulAuth, getRemainingAttempts } from '@/lib/rate-limiter';
import { createSession, validateSession } from '@/lib/session-manager';
import { z } from 'zod';

// Zod schema for request validation
const AuthSchema = z.object({
  password: z.string().min(1, 'Password required'),
});

const SessionSchema = z.object({
  sessionToken: z.string().min(1, 'Session token required'),
});

/**
 * GET /api/contacts - Verify session and get contacts
 * Requires valid session token
 */
export async function GET(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');

    if (!sessionToken) {
      return NextResponse.json({ error: 'Session token required' }, { status: 401 });
    }

    // Validate session
    if (!validateSession(sessionToken, ip)) {
      return NextResponse.json({ error: 'Invalid or expired session' }, { status: 401 });
    }

    // Get contacts from Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('page')
      .order('sort_order');

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

/**
 * POST /api/contacts - Authenticate and create session
 * Requires password in body
 */
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many attempts. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request
    const body = await request.json();
    const validation = AuthSchema.safeParse(body);

    if (!validation.success) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    const { password } = validation.data;

    // Verify password (from environment variable, trim whitespace/newlines)
    const correctPassword = process.env.PHONE_BOOK_PASSWORD?.trim();
    
    if (!correctPassword) {
      console.error('PHONE_BOOK_PASSWORD not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Constant-time comparison to prevent timing attacks
    const passwordMatch = constantTimeCompare(password, correctPassword);

    if (!passwordMatch) {
      recordFailedAttempt(ip);
      const remaining = getRemainingAttempts(ip);
      
      return NextResponse.json(
        {
          error: 'Invalid password',
          attemptsRemaining: remaining,
          blocked: remaining === 0,
        },
        { status: 401 }
      );
    }

    // Password correct - create session
    recordSuccessfulAuth(ip);
    const session = createSession(ip);

    return NextResponse.json({
      sessionToken: session.token,
      expiresAt: session.expiresAt,
      expiresIn: (session.expiresAt - session.createdAt) / 1000, // seconds
    });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

/**
 * Constant-time string comparison to prevent timing attacks
 */
function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return mismatch === 0;
}
