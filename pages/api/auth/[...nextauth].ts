import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.Google({
      clientId: process.env.NEXTAUTH_GOOGLE_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url: string, baseUrl: string) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },
});
