import * as React from 'react'

import { styled } from '~/stitches'
import { findChildByType } from '~/utilities'

import { Flex } from '../flex'
import { Stack } from '../stack'
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

  const heading = findChildByType(children, BannerHeading)
  const text = findChildByType(children, BannerText)
  const actions = findChildByType(children, BannerActions)

  return (
    <Container
      size={size}
      css={{ flexDirection: 'column', background, ...css }}
      {...props}
    >
      <Stack direction="column" css={{ pr: 'calc($5 + $4)' }}>
        {heading}
        {text}
      </Stack>
      {actions}
    </Container>
  )
}

BannerContent.displayName = 'BannerContent'
