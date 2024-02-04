"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import {
  Input,
  Button,
  Snackbar,
  SnackbarAction,
  SnackbarProvider,
} from "@/ui";
import { SignInDiv } from "./style";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        username,
        password,
      });
      if (res?.error) {
        setOpenSnackbar(true);
      }
    } catch (e) {
      console.log(e);
    }

    setUsername("");
    setPassword("");
  };
  return (
    <>
      <SnackbarProvider swipeDirection="left">
        <Snackbar
          description="Invalid Credentials"
          open={openSnackbar}
          onOpenChange={() => setOpenSnackbar(false)}
        >
          <SnackbarAction asChild altText="button">
            <Button variant="ghost">Close</Button>
          </SnackbarAction>
        </Snackbar>
      </SnackbarProvider>
      <SignInDiv>
        <h1>Welcome Back!</h1>
        <Input
          type="text"
          Size="md"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          type="password"
          Size="md"
          placeholder="Enter you password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button
          size="md"
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Sign In
        </Button>
        <p>
          Don&apos;t have an account?
          <Link href="/api/auth/register"> Register</Link>
        </p>
      </SignInDiv>
    </>
  );
};

export default SignIn;
