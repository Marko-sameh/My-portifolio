import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

// Ensure NextAuth has a secret in production
if (!process.env.NEXTAUTH_SECRET) {
  process.env.NEXTAUTH_SECRET = process.env.API_SECRET_KEY;
}

if (!process.env.NEXTAUTH_URL) {
  process.env.NEXTAUTH_URL = "https://markosameh.com";
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
