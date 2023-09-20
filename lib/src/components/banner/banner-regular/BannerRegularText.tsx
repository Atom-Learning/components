import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../../text'
import { useBannerContext } from '../BannerContext'

const StyledText = styled(Text, {
  variants: {
    containerSize: {
      sm: {
        mb: '$4'
      },
      md: {
        mb: '$24'
      }
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

export const BannerRegularText: React.FC<React.ComponentProps<typeof Text>> = (
  props
) => {
  const { emphasis, size, hasDismiss } = useBannerContext()

  return (
    <StyledText
      size={size}
      containerSize={size}
      emphasis={emphasis}
      hasDismiss={hasDismiss}
      {...props}
    />
  )
}

BannerRegularText.displayName = 'BannerRegularText'
