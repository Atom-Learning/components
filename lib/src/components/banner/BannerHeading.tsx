import * as React from 'react'

import { Heading } from '../heading'

export const BannerHeading: React.FC<React.ComponentProps<typeof Heading>> = ({
  css,
  ...props
}) => <Heading size="sm" css={{ mb: '16px', ...css }} {...props} />

BannerHeading.displayName = 'BannerHeading'
