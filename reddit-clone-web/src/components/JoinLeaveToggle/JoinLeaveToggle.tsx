"use client";
import React, { useEffect } from "react";
import type { Session } from "next-auth";
import {
  useGetSubscription,
  usePostSubscription,
} from "@/hooks/useSubscription";
import { Button } from "@/ui";
import {
  RefetchOptions,
  QueryObserverResult,
  useQueryClient,
} from "@tanstack/react-query";
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
  const { mutateAsync, reset } = usePostSubscription(
    subredditId,
    userId,
    session
  );
  const {
    data: subscription,
    isLoading,
    error,
    isFetching,
    refetch: subRefetch,
  } = useGetSubscription(userId, subredditId, session);

  const [subscribed, setSubscribed] = React.useState<boolean>(
    Boolean(subscription)
  );

  useEffect(() => {
    setSubscribed(Boolean(subscription));
  }, [subscription]);
  const handleJoinClick = async () => {
    await mutateAsync();
    await subRefetch();
    await refetch();
  };

  const handleLeaveClick = async () => {
    await mutateAsync();
    await subRefetch();
    await refetch();
  };

  return subscribed ? (
    <Button variant="ghost" size="sm" onClick={handleLeaveClick}>
      Leave
    </Button>
  ) : (
    <Button variant="secondary" size="sm" onClick={handleJoinClick}>
      Join
    </Button>
  );
};

export default JoinLeaveToggle;
