import routes from "@/lib/routes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCreatePost = (
  title: string,
  content: any,
  subredditId: string,
  authorId?: string
) => {
  const { mutateAsync, error, data, isSuccess } = useMutation({
    mutationFn: async () => {
      const url = routes.post.create();
      const payload = {
        title,
        content,
        authorId,
        subredditId,
      };
      const response = await axios.post(url, payload);
      return response.data;
    },
    onError: (): any => {
      return error;
    }
  });

  return { mutateAsync, error, data ,isSuccess};
};
