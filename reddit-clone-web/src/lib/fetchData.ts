import axios from "axios";
import type { Session } from "next-auth";
import { BASE_URL } from "@/config/app.config";

const makeAuthenticatedRequest = async (
  url: string,
  method = "GET",
  data?: any,
  session?: Session
) => {
  try {
    const config: any = { method, url, data };
    console.log(data);
    if (session) {
      config.headers = {
        Authorization: `Bearer ${session.user.token}`,
      };
    }
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};

export const fetchData = async (
  url: string,
  method = "GET",
  body?: any,
  session?: Session
) => {
  try {
    const data = await makeAuthenticatedRequest(
      `${BASE_URL}/${url}`,
      method,
      body,
      session
    );
    return data;
  } catch (error) {}
};
