import * as React from 'react'

import { IBannerContextValue } from './Banner.types'

export const BannerContext = React.createContext<
  IBannerContextValue | undefined
>(undefined)

export const useBannerContext = (): Partial<IBannerContextValue> => {
  const context = React.useContext(BannerContext)

  if (context === undefined) {
    throw new Error(
      'useBannerContext must be used within a BannerContextProvider'
    )
  }

  return context
}
