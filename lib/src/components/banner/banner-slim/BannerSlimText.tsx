import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../../text'
import { useBannerContext } from '../BannerContext'

const StyledText = styled(Text, {
  color: '$grey900',
  fontWeight: '600',
  variants: {
    containerSize: {
      sm: {},
      md: {}
    },
    emphasis: {
      highContrast: {
        color: '$grey100'
      },
      midContrast: {},
      lowContrast: {}
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
        mr: '$7'
      }
    }
  ]
})

export const BannerSlimText: React.FC<React.ComponentProps<typeof Text>> = (
  props
) => {
  const { emphasis, size, hasDismiss } = useBannerContext()

  return (
    <StyledText
      size="md"
      containerSize={size}
      emphasis={emphasis}
      hasDismiss={hasDismiss}
      noCapsize
      {...props}
    />
  )
}

BannerSlimText.displayName = 'BannerSlimText'
