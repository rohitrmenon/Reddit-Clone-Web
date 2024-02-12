import { useQuery, useMutation } from "@tanstack/react-query";
import type { Session } from "next-auth";
import { fetchData } from "@/lib/fetchData";

export const useGetData = (url: string, session?: Session) => {
  return useQuery({
    queryKey: [url, session],
    queryFn: async () => await fetchData(url, "GET", session),
    refetchInterval:3000
  });
};

export const usePostData = (url: string, data: any, session?: Session) => {
  return useMutation({
    mutationFn: async () => await fetchData(url, "POST", session, data),
    onError: (error) => {
      throw error;
    },
    onSuccess: (data) => {
      return data;
    },
  });
};
