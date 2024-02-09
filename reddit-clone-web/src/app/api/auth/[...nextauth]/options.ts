import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { BASE_URL } from "@/config/app.config";
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
      authorize: async (credentials: Credentials | undefined) => {
        if (!credentials) {
          return null;
        }
        const { username, password } = credentials;

        try {
          const res = await axios.post(
            `${BASE_URL}/api/v1/users/login`,
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
          throw err;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user && user.token) {
        token.username = user.username;
        token.token = user.token;
        token.id  = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: session.user.name,
        username: token.username,
        email: session.user.email,
        token: token.token,
      };
      return session;
    },
  },
  pages: {
    signIn: "/api/auth/signIn",
  },
};

