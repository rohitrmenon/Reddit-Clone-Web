import { useQuery, useMutation } from "@tanstack/react-query";
import type { Session } from "next-auth";
import { fetchData } from "@/lib/fetchData";

export const useGetData = (session: Session, url: string) => {
  return useQuery({
    queryKey: [url, session],
    queryFn: () => fetchData(url, "GET", session),
  });
};

export const usePostData = (
  url: string,
  data: any,
  session?: Session
) => {
  return useMutation({
    mutationFn: async () => await fetchData(url, "POST", data, session),
  });
};
