"use client";
import { useState, useEffect } from "react";
import type { Session } from "next-auth";
import {
  useGetSubscription,
  usePostSubscription,
} from "@/hooks/useSubscription";
import { Button } from "@/ui";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
interface JoinLeaveToggleProps {
  subredditId: string;
  userId: string;
  session: Session;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<any, Error>>;
}

const JoinLeaveToggle = ({
  subredditId,
  userId,
  session,
  refetch,
}: JoinLeaveToggleProps) => {
  const { mutateAsync } = usePostSubscription(subredditId, userId, session);
  const { data: subscription, refetch: subRefetch } = useGetSubscription(
    userId,
    subredditId,
    session
  );

  const [subscribed, setSubscribed] = useState<boolean>(Boolean(subscription));

  useEffect(() => {
    setSubscribed(Boolean(subscription));
  }, [subscription]);

  const handleJoinAndLeave = async () => {
    await mutateAsync();
    await subRefetch();
    await refetch();
  };

  return subscribed ? (
    <Button variant="ghost" size="sm" onClick={handleJoinAndLeave}>
      Leave
    </Button>
  ) : (
    <Button variant="secondary" size="sm" onClick={handleJoinAndLeave}>
      Join
    </Button>
  );
};

export default JoinLeaveToggle;
