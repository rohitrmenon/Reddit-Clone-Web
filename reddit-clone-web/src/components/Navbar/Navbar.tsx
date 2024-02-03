"use client";
import React, { FormEvent, useEffect } from "react";
import Link from "next/link";
import { NavbarContainer, NavbarStyle, NavTextMain } from "./style";
import { Button } from "@/ui";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Navbar(): JSX.Element {
  const { data: session } = useSession();

  return (
    <NavbarContainer>
      <NavbarStyle>
        <NavTextMain>
          <Link href="/">Reddit</Link>
        </NavTextMain>

        {session ? (
          <>
            <p>Welcome, {session.user?.name}!</p>
            <Button variant="ghost" onClick={() => signOut()}>
              Sign Out
            </Button>
          </>
        ) : (
          <Button variant="ghost" onClick={() => signIn()}>
            Sign In
          </Button>
        )}
      </NavbarStyle>
    </NavbarContainer>
  );
}

export default Navbar;
