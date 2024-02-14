const routes = {
  auth: {
    login: "api/v1/users/login",
    register: "api/v1/users/register",
  },
  user: {
    profile: "api/v1/users",
  },
  subreddit: {
    create: "api/v1/subreddits/create",
    getSubredditByUser: "api/v1/subreddits/user",
    getSubredditBySlug: "api/v1/subreddits/getBySlug",
    getAllSubreddits: "api/v1/subreddits",
  },
};

export default routes;
