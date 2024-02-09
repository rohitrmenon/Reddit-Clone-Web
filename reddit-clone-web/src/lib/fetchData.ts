import axios from "axios";
import type { Session } from "next-auth";

const makeAuthenticatedRequest = async (
  url: string,
  method = "GET",
  data = null,
  session: Session
) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${session.user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};

export const fetchData = async (session: Session, url: string) => {
  try {
    const data = await makeAuthenticatedRequest(url, "GET", null, session);
    return data;
  } catch (error) {}
};
