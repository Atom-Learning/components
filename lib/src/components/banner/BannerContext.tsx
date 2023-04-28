import * as React from 'react'

import { TBannerContainerProps } from './BannerContainer'

export type TBannerProviderProps = Pick<
  TBannerContainerProps,
  'size' | 'emphasis'
>

type TBannerContextValue = TBannerProviderProps & {
  hasDismiss: boolean
  setHasDismiss: React.Dispatch<React.SetStateAction<boolean>>
}

export const BannerContext = React.createContext<TBannerContextValue>({
  hasDismiss: false,
  setHasDismiss: () => null
})

export const useBannerContext = (): TBannerContextValue => {
  const context = React.useContext(BannerContext)

  if (context === undefined) {
    throw new Error('useBannerContext must be used within a BannerProvider')
  }

  return context
}

export const BannerProvider: React.FC<TBannerProviderProps> = ({
  emphasis,
  size,
  children
}) => {
  const [hasDismiss, setHasDismiss] = React.useState(false)
  const value = React.useMemo<TBannerContextValue>(
    () => ({ emphasis, size, hasDismiss, setHasDismiss }),
    [emphasis, size, hasDismiss, setHasDismiss]
  )
  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  )
}
