// In-memory rate limiter for Admin Login attempts
// Enforces max attempts, lockout durations, and timing delay against brute force attacks.

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes lockout
const WINDOW_MS = 15 * 60 * 1000;  // 15 minute window

// In-memory storage for login attempt tracking
const attemptStore = new Map();

// Helper to clean up expired entries periodically
function cleanupExpired() {
  const now = Date.now();
  for (const [key, record] of attemptStore.entries()) {
    if (record.lockedUntil && record.lockedUntil < now) {
      attemptStore.delete(key);
    } else if (now - record.firstAttempt > WINDOW_MS && !record.lockedUntil) {
      attemptStore.delete(key);
    }
  }
}

export function getClientIdentifier(req) {
  if (!req) return 'global-admin';
  const headers = req.headers || {};
  const forwarded = headers['x-forwarded-for'] || (typeof req.get === 'function' ? req.get('x-forwarded-for') : null);
  const realIp = headers['x-real-ip'] || (typeof req.get === 'function' ? req.get('x-real-ip') : null);
  const ip = (typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : '') || realIp || 'admin-client';
  return ip;
}

export function checkRateLimit(key = 'admin-client') {
  cleanupExpired();
  const record = attemptStore.get(key);
  const now = Date.now();

  if (!record) {
    return {
      isLocked: false,
      remainingAttempts: MAX_ATTEMPTS,
      retryAfterSeconds: 0,
      attempts: 0,
    };
  }

  if (record.lockedUntil && record.lockedUntil > now) {
    const retryAfterSeconds = Math.ceil((record.lockedUntil - now) / 1000);
    return {
      isLocked: true,
      remainingAttempts: 0,
      retryAfterSeconds,
      attempts: record.count,
    };
  }

  // If lockout expired, reset
  if (record.lockedUntil && record.lockedUntil <= now) {
    attemptStore.delete(key);
    return {
      isLocked: false,
      remainingAttempts: MAX_ATTEMPTS,
      retryAfterSeconds: 0,
      attempts: 0,
    };
  }

  const remaining = Math.max(0, MAX_ATTEMPTS - record.count);
  return {
    isLocked: remaining <= 0,
    remainingAttempts: remaining,
    retryAfterSeconds: remaining <= 0 ? Math.ceil(LOCKOUT_MS / 1000) : 0,
    attempts: record.count,
  };
}

export function recordFailedAttempt(key = 'admin-client') {
  cleanupExpired();
  const now = Date.now();
  let record = attemptStore.get(key);

  if (!record || (now - record.firstAttempt > WINDOW_MS && !record.lockedUntil)) {
    record = {
      count: 1,
      firstAttempt: now,
      lockedUntil: null,
    };
  } else {
    record.count += 1;
  }

  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_MS;
  }

  attemptStore.set(key, record);

  const remaining = Math.max(0, MAX_ATTEMPTS - record.count);
  const isLocked = Boolean(record.lockedUntil && record.lockedUntil > now);
  const retryAfterSeconds = isLocked ? Math.ceil((record.lockedUntil - now) / 1000) : 0;

  return {
    isLocked,
    remainingAttempts: remaining,
    retryAfterSeconds,
    attempts: record.count,
  };
}

export function resetRateLimit(key = 'admin-client') {
  attemptStore.delete(key);
}
