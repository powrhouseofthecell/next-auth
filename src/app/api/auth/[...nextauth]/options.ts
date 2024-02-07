import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials: any) {
        // this is where you will retrieve user data
        const user = { id: "43", name: "Guroo", password: "nextauth" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else return null;
      },
    }),
  ],
};
