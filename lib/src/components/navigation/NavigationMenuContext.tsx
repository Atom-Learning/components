import React from 'react'

interface NavigationMenuContextValue {
  onNodeUpdate: (
    trigger: HTMLButtonElement,
    itemValue: string
  ) => HTMLButtonElement
}

export const NavigationMenuContext = React.createContext<
  NavigationMenuContextValue | undefined
>(undefined)

export const useNavigationMenuContext = (): NavigationMenuContextValue => {
  const context = React.useContext(NavigationMenuContext)

  if (context === undefined) {
    throw new Error(
      'useNavigationMenuContext must be used within a NavigationMenuContextProvider'
    )
  }

  return context
}
