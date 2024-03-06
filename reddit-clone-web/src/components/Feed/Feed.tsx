import { useGetPosts } from "@/hooks/useGetPosts";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Post from "../Post/Post";

interface FeedProps {
  subredditId: string;
}

const Feed = ({ subredditId }: FeedProps) => {
  const { data, fetchNextPage } = useGetPosts(subredditId);

  const posts = data?.pages.flatMap((page) => page);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div>
      {posts?.map((post, index) => <Post key={index} title={post.title} />)}
      <div ref={ref}></div>
    </div>
  );
};

export default Feed;
