import * as React from 'react'

import { Dismissible } from '../dismissible'
import { BannerProvider } from './BannerContext'

export const Banner = Object.assign(BannerProvider, {
  Dismiss: Dismissible.Trigger
})

Banner.displayName = 'Banner'
