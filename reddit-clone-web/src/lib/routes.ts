import { BASE_URL } from "@/config/app.config";

const routes = {
  auth: {
    login: "api/v1/users/login",
    register: "api/v1/users/register",
  },
  user: {
    profile: "api/v1/users",
  },
  subreddit: {
    create: () => `${BASE_URL}/api/v1/subreddit/create`,
    getSubredditByUser: () => `${BASE_URL}/api/v1/subreddit/user`,
    getSubredditBySlug: () => `${BASE_URL}/api/v1/subreddit/getBySlug`,
    getAllSubreddits: () => `${BASE_URL}/api/v1/subreddit`,
  },
};

export default routes;
