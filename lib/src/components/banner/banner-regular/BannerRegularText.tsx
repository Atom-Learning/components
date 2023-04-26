import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../../text'
import { useBannerContext } from '../BannerContext'

const StyledText = styled(Text, {
  color: '$grey900',
  variants: {
    containerSize: {
      sm: {
        mb: '$4',
        mr: '$6'
      },
      md: {
        mb: '$24',
        mr: 0
      }
    },
    emphasis: {
      highContrast: {
        color: '$grey100'
      },
      midContrast: {},
      lowContrast: {}
    }
  }
})

export const BannerRegularText: React.FC<React.ComponentProps<typeof Text>> = (
  props
) => {
  const { emphasis, size } = useBannerContext()

  return (
    <StyledText
      size={size}
      containerSize={size}
      emphasis={emphasis}
      {...props}
    />
  )
}

BannerRegularText.displayName = 'BannerRegularText'
