import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { useBannerContext } from './BannerContext'

const Container = styled(Flex, {
  color: '$foreground',
  variants: {
    size: {
      sm: {
        p: '$4'
      },
      md: {
        p: '$24',
        pr: '$5'
      }
    },
    emphasis: {
      highContrast: {
        background: '$base11',
        color: '$foreground7plus'
      },
      midContrast: {
        background: '$base3'
      },
      lowContrast: {
        background: '$base1'
      }
    }
  }
})

export const BannerContent: React.FC<
  React.ComponentProps<typeof Container>
> = ({ css, children, ...props }) => {
  const { size, emphasis } = useBannerContext()

  return (
    <Container
      size={size}
      css={{ flexDirection: 'column', ...css }}
      emphasis={emphasis}
      {...props}
    >
      {children}
    </Container>
  )
}

BannerContent.displayName = 'BannerContent'
