import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../../text'
import { useBannerContext } from '../BannerContext'

const StyledText = styled(Text, {
  color: 'var(--banner-heading-color)',
  variants: {
    containerSize: {
      sm: {},
      md: {}
    },
    hasDismiss: {
      true: {}
    }
  },
  compoundVariants: [
    {
      containerSize: 'sm',
      hasDismiss: true,
      css: {
        mr: '$6'
      }
    }
  ]
})

export const BannerSlimText = (props: React.ComponentProps<typeof Text>) => {
  const { size, hasDismiss } = useBannerContext()

  return (
    <StyledText
      size="md"
      weight="bold"
      containerSize={size}
      hasDismiss={hasDismiss}
      noCapsize
      {...props}
    />
  )
}

BannerSlimText.displayName = 'BannerSlimText'
