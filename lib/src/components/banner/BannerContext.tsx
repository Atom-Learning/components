import * as React from 'react'

import { TBannerContextValue } from './Banner.types'

export const BannerContext = React.createContext<
  TBannerContextValue | undefined
>(undefined)

export const useBannerContext = (): Partial<TBannerContextValue> => {
  const context = React.useContext(BannerContext)

  if (context === undefined) {
    throw new Error(
      'useBannerContext must be used within a BannerContextProvider'
    )
  }

  return context
}
