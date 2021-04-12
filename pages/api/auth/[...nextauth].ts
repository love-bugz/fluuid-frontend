import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.Google({
      clientId: process.env.NEXT_AUTH_GOOGLE_ID,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn(user, account, profile) {
      // check if provider account exists in the db
      // if it does, save the handle on the user object and proceed to home page
      // else, proceed to onboarding page to create a handle

      // for now, just return true
      return true;
    },
    async redirect(url: string, baseUrl: string) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session(session, user) {
      user.handle = "chanceHalo";
      session.user = user;
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },
});
