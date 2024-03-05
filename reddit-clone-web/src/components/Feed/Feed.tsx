import { useGetPosts } from "@/hooks/useGetPosts";
import React from "react";

interface FeedProps {
  subredditName: string;
}
const Feed = ({ subredditName }: FeedProps) => {
  const { data, fetchNextPage } = useGetPosts(subredditName);
  setTimeout(() => {
    fetchNextPage();
  }, 3000);
  return <div>Feed</div>;
};

export default Feed;
