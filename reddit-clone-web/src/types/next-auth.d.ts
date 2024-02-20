import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  export interface JWT {
    id: string;
    token?: string;
    username?: string;
  }
}

declare module "next-auth" {
  export interface Session {
    user: {
      id: string;
      token?: string;
      username?: string;
    } & DefaultSession["user"];
  }

  export interface User {
    id: string;
    token?: string;
    username?: string;
  }
}
