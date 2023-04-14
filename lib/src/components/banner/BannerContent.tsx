import * as React from 'react'

import { styled } from '~/stitches'
import { findChildByType } from '~/utilities'

import { Flex } from '../flex'
import { BannerActions } from './BannerActions'
import { BannerHeading } from './BannerHeading'
import { BannerText } from './BannerText'
import { resolveEmphasis } from './Banner.utils'
import { useBannerContext } from './BannerContext'

const Container = styled(Flex, {
  '& > h1, & > h2, & > h3, & > h4, & > h5, & > h6': {
    mb: '$4'
  },
  variants: {
    size: {
      sm: {
        p: '$4',
        '& > p': {
          mb: '$4'
        }
      },
      md: {
        p: 'calc($4 + $2)',
        pr: '$5',
        '& > p': {
          mb: 'calc($4 + $2)'
        }
      }
    }
  }
})

export const BannerContent: React.FC<
  React.ComponentProps<typeof Container>
> = ({ css, children, size = 'md', ...props }) => {
  const { emphasis } = useBannerContext()
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
