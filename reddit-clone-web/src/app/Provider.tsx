"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
  session?: Session;
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </QueryClientProvider>
  );
};

export default Provider;
