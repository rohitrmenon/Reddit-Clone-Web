import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import type { Session } from "next-auth";
export const useGetData = (
  url: string,
  session: Session,
  interval?:number
) => {
  return useQuery({
    queryKey: [url, session],
    queryFn: async () => {
      try {
        const res = await fetchData(url, "GET", session);
        return res;
      } catch (error: any) {
        throw error;
      }
    },
    refetchOnWindowFocus:true,
    refetchInterval: interval,
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
