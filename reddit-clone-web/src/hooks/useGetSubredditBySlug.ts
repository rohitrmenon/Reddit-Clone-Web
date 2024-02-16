import { useQuery } from "@tanstack/react-query";
import type { Session } from "next-auth";
import routes from "@/lib/routes";
import { fetchData } from "@/lib/fetchData";

export const useGetSubredditBySlug = (slug: string, session?: Session) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [slug, session],
    queryFn: async () => {
      try {
        const data = await fetchData(
          routes.subreddit.getSubredditBySlug(slug),
          "GET",
          session
        );
        return data;
      } catch (error: any) {
        throw error;
      }
    },
  });
  return { data, isLoading, error };
};
