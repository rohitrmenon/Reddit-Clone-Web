"use client";
import { useSubscription } from "@/hooks/useSubscription";
import { Button } from "@/ui";
import React from "react";
import type { Session } from "next-auth";
interface JoinLeaveToggleProps {
  subredditId: string;
  userId: string;
  session: Session;
}
const JoinLeaveToggle = ({
  subredditId,
  userId,
  session,
}: JoinLeaveToggleProps) => {
  const isJoined = true;

  const { mutateAsync, isError, error, reset } = useSubscription(
    subredditId,
    userId,
    session as Session
  );

  return isJoined ? (
    <Button variant="ghost" size="sm">
      Leave
    </Button>
  ) : (
    <Button variant="secondary" size="sm">
      Join
    </Button>
  );
};

export default JoinLeaveToggle;
