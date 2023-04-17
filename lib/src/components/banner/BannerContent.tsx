import * as React from 'react'

import { styled } from '~/stitches'
import { findChildByType } from '~/utilities'

import { Flex } from '../flex'
import { resolveEmphasis } from './Banner.utils'
import { BannerActions } from './BannerActions'
import { useBannerContext } from './BannerContext'
import { BannerHeading } from './BannerHeading'
import { BannerText } from './BannerText'

const Container = styled(Flex, {
  variants: {
    size: {
      sm: {
        p: '$4'
      },
      md: {
        p: 'calc($4 + $2)',
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

  const heading = findChildByType(children, BannerHeading)
  const text = findChildByType(children, BannerText)
  const actions = findChildByType(children, BannerActions)

  return (
    <Container
      size={size}
      css={{ flexDirection: 'column', background, ...css }}
      {...props}
    >
      {heading}
      {text}
      {actions}
    </Container>
  )
}

BannerContent.displayName = 'BannerContent'
