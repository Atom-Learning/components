import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../text'
import { resolveEmphasis } from './Banner.utils'
import { useBannerContext } from './BannerContext'

const StyledText = styled(Text, {
  variants: {
    containerSize: {
      sm: {
        mb: '$4'
      },
      md: {
        mb: '$24'
      }
    }
  }
})

export const BannerText: React.FC<React.ComponentProps<typeof Text>> = ({
  css,
  ...props
}) => {
  const { emphasis, size } = useBannerContext()
  const color = resolveEmphasis('description', emphasis)

  return (
    <StyledText
      size={size}
      containerSize={size}
      css={{ color, ...css }}
      {...props}
    />
  )
}

BannerText.displayName = 'BannerText'
