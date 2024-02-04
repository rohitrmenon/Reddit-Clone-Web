"use client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/ui";

import { NavbarContainer, NavbarStyle, NavTextMain } from "./style";

function Navbar(): JSX.Element {
  const { data: session } = useSession();

  return (
    <NavbarContainer>
      <NavbarStyle>
        <NavTextMain>
          <Link href="/">Yorokobi</Link>
        </NavTextMain>

        {session ? (
          <>
            <p>Welcome, {session.user?.name}!</p>
            <Button variant="ghost" onClick={() => signOut()}>
              Sign Out
            </Button>

          </>
        ) : (
          <div style={{display:"flex", gap:"1rem"}}>
          <Button variant="primary" onClick={() => signIn()}>
            Log in
          </Button>
          <Link href="/api/auth/register"><Button variant="stroke">Sign up</Button></Link>
          </div>
        )}
      </NavbarStyle>
    </NavbarContainer>
  );
}

export default Navbar;
