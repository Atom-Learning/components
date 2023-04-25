// Props: https://github.com/vencax/netlify-cms-github-oauth-provider
const randomstring = require('randomstring')
const { AuthorizationCode } = require('simple-oauth2')
import config from '~/oauth.config.js'

const client = new AuthorizationCode(config)

const authorizationUri = client.authorizeURL({
  redirect_uri: process.env.REDIRECT_URL,
  scope: process.env.SCOPES || 'repo,user',
  state: randomstring.generate(32)
})

const fn = (req, res, next) => {
  res.redirect(authorizationUri)
}
export default fn
