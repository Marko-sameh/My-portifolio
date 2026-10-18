import { PrismaClient } from '@prisma/client';
import path from 'path';

const globalForPrisma = globalThis;

function getDatabaseUrl() {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  // Default to the canonical database at prisma/dev.db
  const dbPath = path.resolve(process.cwd(), 'prisma', 'dev.db');
  return `file:${dbPath}`;
}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
