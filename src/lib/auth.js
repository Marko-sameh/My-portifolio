import crypto from 'crypto';

const validTokens = new Set();

export function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const apiKey = request.headers.get('x-api-key');
  
  // Check API key first
  if (apiKey === process.env.NEXT_PUBLIC_API_KEY) {
    return true;
  }
  
  // Check bearer token
  if (!auth || !auth.startsWith('Bearer ')) return false;
  
  const token = auth.replace('Bearer ', '');
  return validTokens.has(token);
}

export function addToken(token) {
  validTokens.add(token);
}