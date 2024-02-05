"use client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import {
  Button,

} from "@/ui";

import { NavbarContainer, NavbarStyle, NavTextMain } from "./style";
import IsSignedIn from "../IsSignedIn/IsSignedIn";

function Navbar(): JSX.Element {
  const { data: session } = useSession();
  const username = session?.user?.name as string;

  return (
    <NavbarContainer>
      <NavbarStyle>
        <NavTextMain>
          <Link href="/">Yorokobi</Link>
        </NavTextMain>

        {session ? (<IsSignedIn username={username} signOut={signOut} />
         
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button variant="primary" onClick={() => signIn()}>
              Log in
            </Button>
            <Link href="/api/auth/register">
              <Button variant="stroke">Sign up</Button>
            </Link>
          </div>
        )}
      </NavbarStyle>
    </NavbarContainer>
  );
}

export default Navbar;
