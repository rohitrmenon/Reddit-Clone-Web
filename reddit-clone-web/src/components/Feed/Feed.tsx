import { useGetPosts } from "@/hooks/useGetPosts";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { Button } from "@/ui";

interface FeedProps {
  subredditId: string;
}
const Feed = ({ subredditId }: FeedProps) => {
  const { data, fetchNextPage } = useGetPosts(subredditId);

  console.log(data);

  const ref = React.useRef<HTMLDivElement>(null);

  const { ref: viewRef, inView } = useInView();

  return (
    <div>
      <Button onClick={() => fetchNextPage()}>Fetch Next Page</Button>
    </div>
  );
};

export default Feed;
