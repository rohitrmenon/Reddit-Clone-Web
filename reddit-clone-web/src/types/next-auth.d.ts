import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  export interface JWT {
    token?: string;
  }
}

declare module "next-auth" {
  export interface Session {
    user: {
      id?:number  
      token?: string;
    } & DefaultSession["user"];
  }

  export interface User {

    id?:number  
    token?: string;
  }
}
