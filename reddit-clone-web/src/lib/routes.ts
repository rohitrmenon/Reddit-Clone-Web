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
    get: "api/v1/subreddits/user",
  },
};

export default routes;
