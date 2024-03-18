import axios from "axios";
import routes from "@/lib/routes";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useVoteUpdate = (userId: string, postId: string, type: any) => {
  const { mutateAsync, error, data } = useMutation({
    mutationFn: async () => {
      const payload = {
        userId,
        postId,
        type,
      };
      const response = await axios.patch(routes.post.vote(), payload);
      return response.data;
    },
    onError: (): any => {
      return error;
    },
  });

  return { mutateAsync, error, data };
};

export const useVoteGet = (postId: string) => {
  const { data: response, refetch } = useQuery({
    queryKey: [postId],
    queryFn: async () => {
      const response = await axios.get(routes.post.getPost(postId));
      return response;
    },
  });

  return { response, refetch };
};
