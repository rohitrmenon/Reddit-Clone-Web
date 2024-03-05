import routes from "@/lib/routes";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPosts = (subredditName?: string) => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["infinite-posts"],
    queryFn: async ({ pageParam }) => {
      console.log(pageParam, subredditName);
      const response = await axios.get(
        routes.post.paginate(pageParam, subredditName)
      );
      return response.data;
    },
    initialPageParam: 0,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  return { data, fetchNextPage, isFetchingNextPage };
};
