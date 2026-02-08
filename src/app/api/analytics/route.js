import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export async function POST(request) {
  try {
    const metric = await request.json();
    
    logger.info('Web Vital', metric, { 
      route: '/api/analytics',
      metric: metric.name,
      value: metric.value 
    });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    logger.error('Analytics error', error, { route: '/api/analytics' });
    return NextResponse.json({ error: 'Failed to log metric' }, { status: 500 });
  }
}
