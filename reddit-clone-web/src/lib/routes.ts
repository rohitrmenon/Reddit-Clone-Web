import {
  BASE_URL,
  INFINITE_SCROLLING_PAGINATION_RESULTS as limit,
} from "@/config/app.config";

const routes = {
  auth: {
    login: `${BASE_URL}/api/v1/users/login`,
    register: `${BASE_URL}/api/v1/users/register`,
  },
  user: {
    profile: "api/v1/users",
  },
  subreddit: {
    create: () => `${BASE_URL}/api/v1/subreddit/create`,
    getSubredditByUser: () => `${BASE_URL}/api/v1/subreddit/user`,
    getSubredditBySlug: (slug: string) =>
      `${BASE_URL}/api/v1/subreddit/getBySlug/${slug}`,
    getAllSubreddits: () => `${BASE_URL}/api/v1/subreddit`,
    postSubscription: () => `${BASE_URL}/api/v1/subreddit/postSubscription`,
    getSubscription: (userId: string, subredditId: string) =>
      `${BASE_URL}/api/v1/subreddit/getSubscription/user/${userId}/subreddit/${subredditId}`,
  },
  post: {
    create: () => `${BASE_URL}/api/v1/posts/create`,
    link: () => `${BASE_URL}/api/v1/posts/link`,
    paginate: (pageParam: number, subredditId?: string) =>
      `${BASE_URL}/api/v1/posts/paginate?limit=${limit}&pageParam=${pageParam}&subredditId=${subredditId}`,
  },
};

export default routes;
