import * as React from 'react'

import { TBannerContainerProps } from './BannerContainer'

type TBannerContextValue = Pick<TBannerContainerProps, 'size' | 'emphasis'>

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
