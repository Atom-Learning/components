import * as React from 'react'

import type { TButtonProps } from './Button'

type TButtonProviderProps = {
  size?: TButtonProps['size']
  overflow?: TButtonProps['overflow']
}

type TButtonContext = TButtonProviderProps & {
  isOverflowing?: boolean
  setIsOverflowing?: React.Dispatch<React.SetStateAction<boolean>>
}

export const ButtonContext = React.createContext<TButtonContext>({})

export const ButtonProvider = ({
  size,
  overflow,
  children
}: React.PropsWithChildren<TButtonProviderProps>) => {
  const [isOverflowing, setIsOverflowing] = React.useState(false)

  const value = React.useMemo<TButtonContext>(
    () => ({ size, overflow, isOverflowing, setIsOverflowing }),
    [size, overflow, isOverflowing, setIsOverflowing]
  )
  return <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
}
