import React from 'react'

interface NavigationMenuContextValue {
  activeItem: string | undefined
  setActiveItem: React.Dispatch<React.SetStateAction<string | undefined>>
  onNodeUpdate: (
    trigger: HTMLButtonElement,
    itemValue: string
  ) => HTMLButtonElement
}

const NavigationMenuContext = React.createContext<
  NavigationMenuContextValue | undefined
>(undefined)

const useNavigationMenuContext = (): NavigationMenuContextValue => {
  const context = React.useContext(NavigationMenuContext)

  if (context === undefined) {
    throw new Error(
      'useNavigationMenuContext must be used within a NavigationMenuContextProvider'
    )
  }

  return context
}

export { NavigationMenuContext, useNavigationMenuContext }
