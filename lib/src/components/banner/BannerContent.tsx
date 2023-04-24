import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { resolveEmphasis } from './Banner.utils'
import { useBannerContext } from './BannerContext'

const Container = styled(Flex, {
  variants: {
    size: {
      sm: {
        p: '$4'
      },
      md: {
        p: '$24',
        pr: '$5'
      }
    }
  }
})

export const BannerContent: React.FC<
  React.ComponentProps<typeof Container>
> = ({ css, children, ...props }) => {
  const { emphasis, size } = useBannerContext()
  const background = resolveEmphasis('background', emphasis)

  return (
    <Container
      size={size}
      css={{ flexDirection: 'column', background, ...css }}
      {...props}
    >
      {children}
    </Container>
  )
}

BannerContent.displayName = 'BannerContent'
