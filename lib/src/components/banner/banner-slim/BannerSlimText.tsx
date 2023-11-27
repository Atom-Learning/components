import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../../text'
import { useBannerContext } from '../BannerContext'

const StyledText = styled(Text, {
  color: 'var(--banner-heading-color)',
  fontWeight: '600',
  variants: {
    hasDismiss: {
      true: { mr: '$6' }
    }
  }
})

export const BannerSlimText: React.FC<React.ComponentProps<typeof Text>> = (
  props
) => {
  const { size, hasDismiss } = useBannerContext()

  return <StyledText size="md" hasDismiss={hasDismiss} noCapsize {...props} />
}

BannerSlimText.displayName = 'BannerSlimText'
