import * as React from 'react'

import { Text } from '../text'

export const BannerText: React.FC<React.ComponentProps<typeof Text>> = (
  props
) => <Text {...props} />

BannerText.displayName = 'BannerText'
