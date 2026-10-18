import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

/**
 * Strict server-side verification for admin endpoints.
 * Checks for a valid NextAuth session or an explicitly configured server-to-server secret.
 */
export async function isAuthorizedAdmin(request) {
  try {
    const session = await getServerSession(authOptions);
    if (session?.user) {
      return true;
    }

    // Optional server secret key (strictly checked against private API_SECRET_KEY)
    const serverSecret = process.env.API_SECRET_KEY;
    const providedKey = request?.headers?.get('x-api-key');

    if (serverSecret && providedKey && serverSecret === providedKey) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("isAuthorizedAdmin check failed:", error);
    return false;
  }
}
