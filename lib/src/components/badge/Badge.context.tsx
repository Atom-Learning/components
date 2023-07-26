import * as React from 'react'

import type { TBadgeProps } from './Badge'

type TBadgeProviderProps = {
  size?: TBadgeProps['size']
  overflow?: TBadgeProps['overflow']
}

type TBadgeContext = TBadgeProviderProps & {
  isOverflowing?: boolean
  setIsOverflowing?: React.Dispatch<React.SetStateAction<boolean>>
}

export const BadgeContext = React.createContext<TBadgeContext>({})

export const BadgeProvider: React.FC<TBadgeProviderProps> = ({
  size,
  overflow,
  children
}) => {
  const [isOverflowing, setIsOverflowing] = React.useState(false)

  const value = React.useMemo<TBadgeContext>(
    () => ({ size, overflow, isOverflowing, setIsOverflowing }),
    [size, overflow, isOverflowing, setIsOverflowing]
  )
  return <BadgeContext.Provider value={value}>{children}</BadgeContext.Provider>
}
