"use client";
import React from "react";
import { RegisterDiv } from "./style";
import { Input, Button } from "@/ui";
import Link from "next/link";

const SignIn = () => {
  return (
    <RegisterDiv>
      <h1>Welcome!</h1>
      <Input type="text" Size="md" placeholder="Enter your username"></Input>
      <Input type="password" Size="md" placeholder="Enter you password"></Input>
      <Input type="password" Size="md" placeholder="Confirm your password"></Input>
      <Button size="md" variant="primary">
        Sign Up
      </Button>
      <p>
        Already have an account?<Link href="/api/auth/signIn"> Sign in</Link>
      </p>
    </RegisterDiv>
  );
};

export default SignIn;
