import * as React from 'react'

export const SideBarContext = React.createContext<{
  isExpanded: boolean
}>({
  isExpanded: false
})

export const useSidebarState = () => React.useContext(SideBarContext)
