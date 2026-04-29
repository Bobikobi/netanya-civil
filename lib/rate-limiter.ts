/**
 * In-memory rate limiter for API routes.
 * Limits login attempts per IP address.
 */

const MAX_ATTEMPTS = 5;
const BLOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutes
const WINDOW_MS = 10 * 60 * 1000; // 10 minute window

interface AttemptRecord {
  count: number;
  firstAttempt: number;
  blockedUntil?: number;
}

const attempts = new Map<string, AttemptRecord>();

function getRecord(ip: string): AttemptRecord {
  const now = Date.now();
  const record = attempts.get(ip);

  if (!record) return { count: 0, firstAttempt: now };

  // Reset window if expired
  if (!record.blockedUntil && now - record.firstAttempt > WINDOW_MS) {
    return { count: 0, firstAttempt: now };
  }

  return record;
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = getRecord(ip);

  if (record.blockedUntil && now < record.blockedUntil) {
    return true;
  }

  // Unblock if block duration has passed
  if (record.blockedUntil && now >= record.blockedUntil) {
    attempts.delete(ip);
    return false;
  }

  return record.count >= MAX_ATTEMPTS;
}

export function recordFailedAttempt(ip: string): void {
  const record = getRecord(ip);
  record.count += 1;

  if (record.count >= MAX_ATTEMPTS) {
    record.blockedUntil = Date.now() + BLOCK_DURATION_MS;
  }

  attempts.set(ip, record);
}

export function recordSuccessfulAuth(ip: string): void {
  attempts.delete(ip);
}

export function getRemainingAttempts(ip: string): number {
  const record = getRecord(ip);
  return Math.max(0, MAX_ATTEMPTS - record.count);
}
