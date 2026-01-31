import crypto from 'crypto';

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
  
  try {
    const expectedPrefix = crypto.createHmac('sha256', process.env.API_SECRET_KEY)
      .update(process.env.ADMIN_PASSWORD)
      .digest('hex').substring(0, 16);
    
    return token.startsWith(expectedPrefix);
  } catch {
    return false;
  }
}