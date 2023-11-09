import * as React from 'react'

export const SideBarContext = React.createContext<{
  isExpanded?: boolean
}>({
  isExpanded: undefined
})

export const useSidebar = () => React.useContext(SideBarContext)
