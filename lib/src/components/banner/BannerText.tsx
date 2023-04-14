import * as React from 'react'

import { Text } from '../text'
import { resolveEmphasis } from './Banner.utils'
import { useBannerContext } from './BannerContext'

export const BannerText: React.FC<React.ComponentProps<typeof Text>> = ({
  css,
  ...props
}) => {
  const { emphasis } = useBannerContext()
  const color = resolveEmphasis('description', emphasis)

  return <Text css={{ color, ...css }} {...props} />
}

BannerText.displayName = 'BannerText'
