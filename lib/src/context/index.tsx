import * as React from 'react'

export const ComponentsContext = React.createContext({
  Link: (props) => <a {...props} />
})

export const ComponentsProvider = ComponentsContext.Provider
