import * as React from 'react'

import { findChildByType } from '~/utilities'

import { Flex } from '../flex'
import { BannerActions } from './BannerActions'
import { BannerHeading } from './BannerHeading'
import { BannerText } from './BannerText'

export const BannerContent: React.ComponentProps<typeof Flex> = ({
  css,
  children,
  ...props
}) => {
  const heading = findChildByType(children, BannerHeading)
  const text = findChildByType(children, BannerText)
  const actions = findChildByType(children, BannerActions)

  return (
    <Flex css={{ flexDirection: 'column', ...css }} {...props}>
      {heading}
      {text}
      {actions}
    </Flex>
  )
}

BannerContent.displayName = 'BannerContent'
