import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../../text'
import { useBannerContext } from '../BannerContext'

const StyledText = styled(Text, {
  color: 'var(--banner-text-color)',
  variants: {
    hasDismiss: {
      true: { mr: '$6' }
    }
  }
})

export const BannerRegularText: React.FC<React.ComponentProps<typeof Text>> = (
  props
) => {
  const { size, hasDismiss } = useBannerContext()

  return <StyledText {...props} size={size} hasDismiss={hasDismiss} />
}

BannerRegularText.displayName = 'BannerRegularText'
