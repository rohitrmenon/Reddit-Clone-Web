import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import routes from "@/lib/routes";
import { fetchData } from "@/lib/fetchData";
import type { Session } from "next-auth";
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";

export const usePostSubscription = (
  subredditId: string,
  userId: string,
  session?: Session
) => {
  const { mutateAsync, isError, error, reset } = useMutation({
    mutationFn: async () => {
      const body: SubscribeToSubredditPayload = {
        userId,
        subredditId,
      };
      const response = await fetchData(
        routes.subreddit.postSubscription(),
        "POST",
        session,
        body
      );
      console.log(response);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { mutateAsync, isError, error, reset };
};

export const useGetSubscription = (
  userId: string,
  subredditId: string,
  session?: Session
) => {
  const { data, error, isLoading, isFetching,refetch } = useQuery({
    queryKey: ["subscription", userId, subredditId],
    queryFn: async () => {
      try {
        const response = await fetchData(
          routes.subreddit.getSubscription(userId, subredditId),
          "GET",
          session
        );
        return response;
      } catch (error: any) {
        throw error;
      }
    },
  });

  return { data, error, isLoading, isFetching, refetch };
};
