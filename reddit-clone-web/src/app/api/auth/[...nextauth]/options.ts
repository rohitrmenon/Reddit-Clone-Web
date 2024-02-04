import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

interface Credentials {
  username: string;
  password: string;
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 3600,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: Credentials | undefined, req) => {
        if (!credentials) {
          return null;
        }
        const { username, password } = credentials;

        try {
          const res = await axios.post(
            `http://localhost:8080/api/v1/users/login`,
            { email: username, password },
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          const user = res.data;

          if (res && user && user !== "User not found") {
            return user;
          } else {
            throw new Error("Invalid Credentials");
          }
        } catch (err) {
          console.log("Error:", err);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    redirect() {
      return "/";
    },
    async jwt({ user, token }) {
      if (user && user.token) {
        token.token = user.token;
        token.id = user.id;
      }
      console.log("Token:", token);
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as number,
        name: session.user.name,
        email: session.user.email,
        token: token.token,
      };
      console.log("Session:", session);
      return session;
    },
  },
  pages: {
    signIn: "/api/auth/signIn",
  },
};
