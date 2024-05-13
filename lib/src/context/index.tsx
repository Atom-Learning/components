import * as React from 'react'
import { isExternalUrl } from '~/utilities/uri'

const ComponentsContext = React.createContext({
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  Link: (props) => <a {...props} />
})

export const ComponentsProvider = ({ children, Link }) => (
  <ComponentsContext.Provider value={{ Link }}>
    {children}
  </ComponentsContext.Provider>
)

export const useProvidedComponents = (href?: string) => {
  const { Link: RouterLink } = React.useContext(ComponentsContext)

  return {
    RouterLink: isExternalUrl(href) ? 'a' : RouterLink
  }
}
