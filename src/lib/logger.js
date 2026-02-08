// Simple logger for production error tracking
// In production, this could be extended to send to external services like Sentry

const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  error: (message, error, context = {}) => {
    const timestamp = new Date().toISOString();
    const logData = {
      timestamp,
      level: 'ERROR',
      message,
      error: error?.message || error,
      stack: error?.stack,
      context
    };

    if (isDevelopment) {
      console.error('[ERROR]', logData);
    } else {
      // In production, log to file or external service
      console.error(JSON.stringify(logData));
      // TODO: Send to external logging service (Sentry, LogRocket, etc.)
    }
  },

  warn: (message, context = {}) => {
    const timestamp = new Date().toISOString();
    const logData = {
      timestamp,
      level: 'WARN',
      message,
      context
    };

    if (isDevelopment) {
      console.warn('[WARN]', logData);
    } else {
      console.warn(JSON.stringify(logData));
    }
  },

  info: (message, context = {}) => {
    if (isDevelopment) {
      console.info('[INFO]', message, context);
    }
  }
};
