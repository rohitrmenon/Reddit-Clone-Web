import axios from "axios";
import type { Session } from "next-auth";
const makeAuthenticatedRequest = async (
  url: string,
  method = "GET",
  session?: Session,
  data?: any
) => {
  try {
    const config: any = { method, url, data };
    if (session)
      config.headers = {
        Authorization: `${session?.user.token}`,
      };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(error as any);
  }
};

export const fetchData = async (
  url: string,
  method = "GET",
  session?: Session,
  body?: any
) => {
  try {
    const data = await makeAuthenticatedRequest(url, method, session, body);
    if (typeof data === "string") {
      throw new Error(data);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
