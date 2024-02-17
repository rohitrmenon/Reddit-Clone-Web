import { useMutation } from "@tanstack/react-query";
import routes from "@/lib/routes";
import { fetchData } from "@/lib/fetchData";
import type { Session } from "next-auth";
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";

export const useSubscription = (
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
        routes.subreddit.subscription(),
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
