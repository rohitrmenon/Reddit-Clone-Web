"use client";
import React from "react";
import type { Session } from "next-auth";
import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button, Separation } from "@/ui";
import { useGetData } from "@/hooks/useReactQuery";
import routes from "@/lib/routes";
import dateFormatter from "@/lib/dateFormatter";

import {
  AboutText,
  CreatedAtText,
  SubredditContainer,
  SubredditInfoCard,
  SubredditInfoDiv,
  SubscribersCount,
} from "./style";

const Layout = ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const { data: session } = useSession();

  const { data: subreddit, error } = useGetData(
    `${routes.subreddit.getSubredditBySlug}/${slug}`,
    session as Session
  );

  if (error) return notFound();

  return (
    <>
      <SubredditContainer>
        {children}
        <SubredditInfoCard>
          <SubredditInfoDiv>
            <AboutText>About Community</AboutText>
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
