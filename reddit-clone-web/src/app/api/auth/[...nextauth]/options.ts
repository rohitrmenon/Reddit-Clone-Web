import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

interface Credentials {
  username: string;
  password: string;
}

export const options: NextAuthOptions = {
  jwt: {
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

        console.log("Credentials:", { username, password });

        try {
          const res = await axios.post(
            `http://localhost:8080/api/v1/users/login`,
            { email: username, password },
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          const user = res.data;
          console.log("User:", user);

          if (res && user && user !== "User not found") {
            console.log("User:", user);
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
    async session({ session, token }) {
      console.log("Session Callback Value:", session, token);
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }

      return {
        ...session,
        ...token,
      };
    },
    async jwt ({token}){
       console.log("JWT Callback Value:", token);
      return {
       ...token,
      };
    },
    redirect() {
      return "/";
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/api/auth/signIn",
  },
};
