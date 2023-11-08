import * as React from 'react'

export const SideBarExpandableContext = React.createContext<{
  isExpanded?: boolean
}>({
  isExpanded: undefined
})

export const useExpandableSidebar = () =>
  React.useContext(SideBarExpandableContext)
