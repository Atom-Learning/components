import * as React from 'react'

import { Heading } from '../heading'
import { resolveEmphasis } from './Banner.utils'
import { useBannerContext } from './BannerContext'

export const BannerHeading: React.FC<React.ComponentProps<typeof Heading>> = ({
  css,
  ...props
}) => {
  const { emphasis } = useBannerContext()
  const color = resolveEmphasis('title', emphasis)

  return <Heading css={{ color, ...css }} {...props} />
}

BannerHeading.displayName = 'BannerHeading'
