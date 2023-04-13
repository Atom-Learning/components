import * as React from 'react'

import { Heading } from '../heading'

export const BannerHeading: React.FC<React.ComponentProps<typeof Heading>> = (
  props
) => <Heading {...props} />

BannerHeading.displayName = 'BannerHeading'
