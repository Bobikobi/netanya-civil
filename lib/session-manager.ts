/**
 * In-memory session manager for API routes.
 * Creates and validates short-lived session tokens.
 */

import { randomBytes } from 'crypto';

const SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour

interface Session {
  token: string;
  ip: string;
  createdAt: number;
  expiresAt: number;
}

const sessions = new Map<string, Session>();

export function createSession(ip: string): Session {
  const token = randomBytes(32).toString('hex');
  const now = Date.now();
  const session: Session = {
    token,
    ip,
    createdAt: now,
    expiresAt: now + SESSION_DURATION_MS,
  };
  sessions.set(token, session);
  return session;
}

export function validateSession(token: string, ip: string): boolean {
  const session = sessions.get(token);
  if (!session) return false;

  const now = Date.now();
  if (now > session.expiresAt) {
    sessions.delete(token);
    return false;
  }

  if (session.ip !== ip) return false;

  return true;
}

export function invalidateSession(token: string): void {
  sessions.delete(token);
}
