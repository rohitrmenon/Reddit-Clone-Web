import { useGetPosts } from "@/hooks/useGetPosts";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Post from "../Post/Post";
import { IPost } from "@/types/interface";
import { useSession } from "next-auth/react";

interface FeedProps {
  subredditId?: string;
}

const Feed = ({ subredditId }: FeedProps) => {
  const {
    data,
    fetchNextPage,
  } = useGetPosts(subredditId);
  const { data: session } = useSession();
  const posts = data?.pages.flatMap((page) => page);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div>
      {posts?.map((post: IPost, index) => {
        const votesAmount = post.postVotes.reduce((acc, vote) => {
          if (vote.type === "UP") return acc + 1;
          if (vote.type === "DOWN") return acc - 1;
          return acc;
        }, 0);
        const currentVote = post.postVotes.find(
          (vote) => vote.userId === session?.user.id
        );

        return (
          <Post
            key={index}
            post={post}
            votesAmount={votesAmount}
            currentVote={currentVote}
          />
        );
      })}
      <div ref={ref}></div>
    </div>
  );
};

export default Feed;
