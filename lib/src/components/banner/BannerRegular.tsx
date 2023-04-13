import * as React from 'react'

import { findChildByType } from '~/utilities'

import { Flex } from '../flex'
import { BannerActions } from './BannerActions'
import { BannerContent } from './BannerContent'
import { BannerHeading } from './BannerHeading'
import { BannerImage } from './BannerImage'
import { BannerText } from './BannerText'

export const BannerRegular: React.ComponentProps<typeof Flex> & {
  Content: typeof BannerContent
  Heading: typeof BannerHeading
  Text: typeof BannerText
  Actions: typeof BannerActions
  Image: typeof BannerImage
} = ({ css, children, ...props }) => {
  const content = findChildByType(children, BannerContent)
  const image = findChildByType(children, BannerImage)
  return (
    <Flex css={{ ...css }} {...props}>
      {content}
      {image}
    </Flex>
  )
}

BannerRegular.Content = BannerContent
BannerRegular.Heading = BannerHeading
BannerRegular.Text = BannerText
BannerRegular.Actions = BannerActions
BannerRegular.Image = BannerImage

BannerRegular.displayName = 'BannerRegular'
