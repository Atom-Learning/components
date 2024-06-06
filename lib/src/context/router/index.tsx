import * as React from 'react'

import { isExternalUrl, isUriScheme } from '~/utilities/uri'

const shouldUseRouter = (url) => !isExternalUrl(url) && !isUriScheme(url)

const RouterContext = React.createContext({
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  Link: (props) => <a {...props} />
})

export const RouterProvider = ({ children, Link }) => (
  <RouterContext.Provider value={{ Link }}>{children}</RouterContext.Provider>
)

export const useRouter = ({ href }: { href?: string }) => {
  const { Link: RouterLink } = React.useContext(RouterContext)

  return {
    RouterLink: shouldUseRouter(href) ? RouterLink : 'a'
  }
}
