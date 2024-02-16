import type { Session } from "next-auth";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";
import routes from "@/lib/routes";
export const useCreateSubreddit = (body: CreateSubredditPayload,session?: Session) => {
  const { mutateAsync, isError, error, reset } = useMutation({
    mutationFn: async () => {
      const data = await fetchData(
        routes.subreddit.create(),
        "POST",
        session as Session,
        body
      );
      return data;
    },
    onError: (error) => {
      throw error;
    },
    onSuccess: (data) => {
      return data;
    },
  });

  return { mutateAsync, isError, error, reset };
};
