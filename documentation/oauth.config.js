export default {
  client: {
    id: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET,
  },
  auth: {
    // Supply GIT_HOSTNAME for enterprise github installs.
    tokenHost: process.env.GIT_HOSTNAME || "https://github.com",
    tokenPath: process.env.OAUTH_TOKEN_PATH || "/login/oauth/access_token",
    authorizePath: process.env.OAUTH_AUTHORIZE_PATH || "/login/oauth/authorize",
  },
};
