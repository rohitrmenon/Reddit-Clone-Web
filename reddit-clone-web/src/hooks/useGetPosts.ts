import routes from "@/lib/routes";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPosts = (subredditId?: string) => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["infinite-posts", subredditId],
    queryFn: async ({ pageParam }) => {
      console.log(subredditId)
      const response = await axios.get(
        routes.post.paginate(pageParam, subredditId)
      );
      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  return { data, fetchNextPage, isFetchingNextPage };
};
