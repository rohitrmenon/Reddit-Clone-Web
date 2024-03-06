"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { notFound } from "next/navigation";

import CreatePost from "@/components/CreatePost/CreatePost";
import { useGetSubredditBySlug } from "@/hooks/useGetSubredditBySlug";
import Feed from "@/components/Feed/Feed";
interface SlugPageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params: { slug } }: SlugPageProps) => {

  const { data: session } = useSession();

  const { data: subreddit, error } = useGetSubredditBySlug(
    slug,
    session as Session
  );

  if (error) {
    return notFound();
  }
  return (
    <div>
      <h1>y/{subreddit?.name}</h1>
      <CreatePost session={session} />
      <Feed subredditId={subreddit?.id} />
    </div>
  );
};

export default Page;
