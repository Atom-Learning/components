import * as React from 'react'

export const ExpandableContext = React.createContext<{
  isExpanded?: boolean
}>({
  isExpanded: undefined
})

export const useExpandableContext = () => React.useContext(ExpandableContext)
