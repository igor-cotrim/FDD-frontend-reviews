import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: "jwt",
  // },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials == null) return null;

        const user = {
          id: "1",
          name: "Admin",
          email: "admin@admin.com",
          type: "secretaria",
          isCoordenador: true,
        };

        return { ...user };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }: any) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user = token.user;

      return Promise.resolve(session);
    },
    jwt: async ({ token, user }: any) => {
      user &&
        ((token.user = {
          email: user.email,
          id: user.id,
          name: user.username,
          type: user.type,
          isCoordenador: user.isCoordenador,
        }),
        (token.id = user.id),
        (token.jwt = user.jwt));

      return Promise.resolve(token);
    },
  },
};
