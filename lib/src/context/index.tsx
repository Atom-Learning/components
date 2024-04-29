import * as React from 'react'

export const ComponentsContext = React.createContext({
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  Link: (props) => <a {...props} />
})

export const ComponentsProvider = ComponentsContext.Provider
