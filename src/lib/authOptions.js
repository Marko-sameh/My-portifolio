import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";
import {
  checkRateLimit,
  recordFailedAttempt,
  resetRateLimit,
  getClientIdentifier,
} from "./rateLimit";

function safeCompare(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const hashA = crypto.createHash("sha256").update(a).digest();
  const hashB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

const secretKey = process.env.NEXTAUTH_SECRET || process.env.API_SECRET_KEY;

if (!process.env.NEXTAUTH_SECRET) {
  process.env.NEXTAUTH_SECRET = secretKey;
}

export const authOptions = {
  secret: secretKey,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const ip = getClientIdentifier(req);
        const rateStatus = checkRateLimit(ip);

        if (rateStatus.isLocked) {
          throw new Error(`LOCKED:${rateStatus.retryAfterSeconds}`);
        }

        const inputPassword = credentials?.password || "";
        const targetPassword = process.env.ADMIN_PASSWORD || "";

        const isValid =
          Boolean(targetPassword) && safeCompare(inputPassword, targetPassword);

        if (!isValid) {
          // Add artificial delay against brute force automation
          await new Promise((r) => setTimeout(r, 600));
          const updated = recordFailedAttempt(ip);
          if (updated.isLocked) {
            throw new Error(`LOCKED:${updated.retryAfterSeconds}`);
          }
          throw new Error(`INVALID:${updated.remainingAttempts}`);
        }

        resetRateLimit(ip);
        return { id: "1", name: "Admin", role: "admin" };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours session
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user && token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: secretKey,
};
