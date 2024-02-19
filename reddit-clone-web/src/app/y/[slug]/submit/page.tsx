"use client";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { notFound } from "next/navigation";
import { useGetSubredditBySlug } from "@/hooks/useGetSubredditBySlug";
import {
  CreatePostPageSubredditTitle,
  CreatePostPageMainTitle,
  CreatePostPageTitleDiv,
  CreatePostPageContainer,
  CreatePostForm
} from "./style";
import { Button } from "@/ui";
import WYSIWYG from "@/components/WYSIWYG/WYSIWYG";
interface PageProps {
  params: {
    slug: string;
  };
}
const Page = ({ params: { slug } }: PageProps) => {
  const { data: session } = useSession();
  const { data: subreddit } = useGetSubredditBySlug(slug, session as Session);
  if (!subreddit) return notFound();

  return (
    <CreatePostPageContainer>
      <CreatePostPageTitleDiv>
        <CreatePostPageMainTitle>Create Post in </CreatePostPageMainTitle>
        <CreatePostPageSubredditTitle>
          y/{subreddit?.name}
        </CreatePostPageSubredditTitle>
      </CreatePostPageTitleDiv>
      <CreatePostForm>
        <WYSIWYG/>
      </CreatePostForm>
      <Button size="md" variant="primary">
        Submit
      </Button>
    </CreatePostPageContainer>
  );
};

export default Page;
