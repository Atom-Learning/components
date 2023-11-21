import * as React from 'react'

export const SideBarContext = React.createContext<{
  isExpanded?: boolean
}>({
  isExpanded: undefined
})

export const useSidebarState = () => React.useContext(SideBarContext)
