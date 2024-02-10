"use client";
import React, { useState } from "react";
import Link from "next/link";

import {
  Input,
  Button,
  SnackbarAction,
  Snackbar,
  SnackbarProvider,
} from "@/ui";

import { RegistrationPayload } from "@/lib/validators/registrationValidator";
import { usePostData } from "@/hooks/useReactQuery";
import routes from "@/lib/routes";

import { RegisterDiv } from "./style";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const image = "none";

  const [body, setBody] = useState<RegistrationPayload>({
    email,
    name,
    password,
    username,
    image,
  });

  const { mutate } = usePostData(routes.auth.register, body);

  const handleSignUp = async () => {
    setBody({
      email,
      name,
      password,
      username,
      image,
    });

    await mutate();
    setOpenSnackbar(true);
  };

  return (
    <RegisterDiv>
      <SnackbarProvider swipeDirection="left">
        <Snackbar
          description="Registration Successful"
          open={openSnackbar}
          onOpenChange={() => setOpenSnackbar(false)}
        >
          <SnackbarAction asChild altText="button">
            <Button variant="ghost">Close</Button>
          </SnackbarAction>
        </Snackbar>
      </SnackbarProvider>
      <h1>Welcome!</h1>
      <Input
        type="email"
        Size="md"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        type="text"
        Size="md"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        type="text"
        Size="md"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <Input
        type="password"
        Size="md"
        placeholder="Enter you password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Button
        size="md"
        variant="primary"
        onClick={() => {
          handleSignUp();
        }}
      >
        Sign Up
      </Button>
      <p>
        Already have an account?<Link href="/api/auth/signIn"> Sign in</Link>
      </p>
    </RegisterDiv>
  );
}
