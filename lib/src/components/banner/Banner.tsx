import * as React from 'react'

import { Dismissible } from '../dismissible'
import { BannerProvider } from './BannerContext'

export const Banner: React.FC<React.ComponentProps<typeof BannerProvider>> & {
  Dismiss: typeof Dismissible.Trigger
} = ({ children, size, emphasis }) => {
  return (
    <BannerProvider emphasis={emphasis} size={size}>
      {children}
    </BannerProvider>
  )
}

Banner.Dismiss = Dismissible.Trigger
Banner.displayName = 'Banner'
