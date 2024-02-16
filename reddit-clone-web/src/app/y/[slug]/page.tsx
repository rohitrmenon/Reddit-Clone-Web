"use client";
import React from "react";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { notFound } from "next/navigation";
import { useGetData } from "@/hooks/useReactQuery";
import routes from "@/lib/routes";
import CreatePost from "@/components/CreatePost/CreatePost";
interface SlugPageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params: { slug } }: SlugPageProps) => {
  const { data: session } = useSession();
  const { data: subreddit, error } = useGetData(
    `${routes.subreddit.getSubredditBySlug()}/${slug}`,
    session as Session
  );

  if (error) {
    return notFound();
  }
  return (
    <div>
      <h1>y/{subreddit?.name}</h1>
      <CreatePost session={session} />
    </div>
  );
};

export default Page;
