import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize({ email, password }) {
        const res = await fetch(
         "https://apicampy.vercel.app/api/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        );

        if (!res.ok) return null;
        

        const data = await res.json();  console.log("LOGIN RESPONSE =>", data);  // THÊM DÒNG NÀY
        return {
          id: data.user._id,
          email: data.user.email,
          access_token: data.access_token,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.access_token = (user as any).access_token;
      return token;
    },

    async session({ session, token }) {
      (session as any).access_token = token.access_token;
      return session;
    },
  },
});
