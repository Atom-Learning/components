import * as React from 'react'

import { StyledContent } from './DrawerContent'

type TDrawerProviderProps = {
  position?: React.ComponentProps<typeof StyledContent>['position']
}

type TDrawerContext = TDrawerProviderProps

export const DrawerContext = React.createContext<TDrawerContext>({
  position: 'left'
})

export const DrawerProvider = ({
  position = 'left',
  ...rest
}: React.PropsWithChildren<TDrawerProviderProps>): JSX.Element => {
  const value = React.useMemo<TDrawerContext>(() => ({ position }), [position])
  return <DrawerContext.Provider value={value} {...rest} />
}
