// Props: https://github.com/vencax/netlify-cms-github-oauth-provider
const { AuthorizationCode } = require("simple-oauth2");
import config from "~/oauth.config.js";

const client = new AuthorizationCode(config);

const oauthProvider = process.env.OAUTH_PROVIDER || "github";

const originPattern = process.env.ORIGIN || "";
if ("".match(originPattern)) {
  console.warn(
    "Insecure ORIGIN pattern used. This can give unauthorized users access to your repository."
  );
  if (process.env.NODE_ENV === "production") {
    console.error("Will not run without a safe ORIGIN pattern in production.");
    process.exit();
  }
}

export default async (req, res, next) => {
  const code = req.query.code;
  const scope = req.query.scope;

  const tokenParams = {
    code: code,
    redirect_uri: process.env.REDIRECT_URL,
    scope: scope,
  };

  let message, content;
  try {
    const accessToken = await client.getToken(tokenParams); // used to be await
    message = "success";
    content = {
      token: accessToken.token.access_token,
      provider: oauthProvider,
    };
    console.log(accessToken.token);
  } catch (error) {
    console.log("Access Token Error", error.message);
    message = "error";
  }

  const script = `
          <script>
          (function() {
            function recieveMessage(e) {
              console.log("recieveMessage %o", e)
              if (!e.origin.match(${JSON.stringify(originPattern)})) {
                console.log('Invalid origin: %s', e.origin);
                return;
              }
              // send message to main window with da app
              window.opener.postMessage(
                'authorization:${oauthProvider}:${message}:${JSON.stringify(
    content
  )}',
                e.origin
              )
            }
            window.addEventListener("message", recieveMessage, false)
            // Start handshare with parent
            console.log("Sending message: %o", "${oauthProvider}")
            window.opener.postMessage("authorizing:${oauthProvider}", "*")
          })()
          </script>`;
  return res.send(script);
};
