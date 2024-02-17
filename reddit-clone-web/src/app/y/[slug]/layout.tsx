"use client";
import React from "react";
import type { Session } from "next-auth";
import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button, Separation } from "@/ui";
import Spinnner from "@/components/Common/Spinnner";
import { usePostData } from "@/hooks/useReactQuery";
import dateFormatter from "@/lib/dateFormatter";

import {
  AboutText,
  CreatedAtText,
  SubredditContainer,
  SubredditInfoCard,
  SubredditInfoContainer,
  SubredditInfoDiv,
  SubscribersCount,
} from "./style";
import { useGetSubredditBySlug } from "@/hooks/useGetSubredditBySlug";

const Layout = ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const { data: session } = useSession();

  const {
    data: subreddit,
    error,
    refetch,
    isLoading,
  } = useGetSubredditBySlug(slug, session as Session);

  interface requestbody {
    subredditId: string;
    userId: string;
  }

  const body: requestbody = {
    subredditId: subreddit?.id,
    userId: session?.user.id as string,
  };

  const { mutateAsync, data } = usePostData(
    "http://localhost:8080/api/v1/subreddit/subscription",
    body,
    session as Session
  );

  if (isLoading) return <Spinnner />;

  if (error) return notFound();

  return (
    <>
      <SubredditContainer>
        {children}
        <SubredditInfoCard>
          <SubredditInfoDiv>
            <SubredditInfoContainer>
              <div>
                <AboutText>About Community</AboutText>
                {subreddit?.creatorId === session?.user?.id && (
                  <h5>You created this community</h5>
                )}
              </div>
              {subreddit?.creatorId !== session?.user?.id && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    mutateAsync().then(() => refetch());
                  }}
                >
                  Join
                </Button>
              )}
            </SubredditInfoContainer>
            <Separation />
            <CreatedAtText>
              Created At:{dateFormatter(subreddit?.createdAt)}
            </CreatedAtText>
            <SubscribersCount>
              Members:{subreddit?.subscribers?.length}
            </SubscribersCount>
            <Separation />
            <Button variant="primary">Create Post</Button>
          </SubredditInfoDiv>
        </SubredditInfoCard>
      </SubredditContainer>
    </>
  );
};

export default Layout;
