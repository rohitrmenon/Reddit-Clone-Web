import type { Session} from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string 

declare module "next-auth" {
  export interface Session {
    user: {
      id?: UserId;
      name?: string;
      email?: string;
    };
  }
}

declare module "next-auth/jwt" {
  export interface JWT{
    id?: UserId;
    name?: string ;
    email?: string ;
  }
}
