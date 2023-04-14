import * as React from 'react'

import { ColorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'
import { findChildByType } from '~/utilities'

import { Flex } from '../flex'
import { IBannerContextValue } from './Banner.types'
import { BannerActions } from './BannerActions'
import { BannerButton } from './BannerButton'
import { BannerContent } from './BannerContent'
import { BannerContext } from './BannerContext'
import { BannerHeading } from './BannerHeading'
import { BannerImage } from './BannerImage'
import { BannerText } from './BannerText'

type TBannerRegularProps = React.ComponentProps<typeof Container> &
  IBannerContextValue

const Container = styled(Flex, {
  borderRadius: '$0',
  overflow: 'hidden',
  '& > :first-child': {
    flex: 1
  },
  '& > :last-child': {
    flex: 'auto'
  },
  variants: {
    size: {
      sm: {},
      md: {}
    }
  }
})

export const BannerRegular: React.FC<TBannerRegularProps> & {
  Content: typeof BannerContent
  Heading: typeof BannerHeading
  Text: typeof BannerText
  Actions: typeof BannerActions
  Image: typeof BannerImage
  Button: typeof BannerButton
} = ({ css, children, size = 'md', colorScheme, emphasis, ...props }) => {
  const content = findChildByType(children, BannerContent)
  const image = findChildByType(children, BannerImage)
  return (
    <BannerContext.Provider value={{ colorScheme, size, emphasis }}>
      <ColorScheme {...colorScheme}>
        <Container size={size} css={{ ...css }} {...props}>
          {content}
          {image}
        </Container>
      </ColorScheme>
    </BannerContext.Provider>
  )
}

BannerRegular.Content = BannerContent
BannerRegular.Heading = BannerHeading
BannerRegular.Text = BannerText
BannerRegular.Actions = BannerActions
BannerRegular.Image = BannerImage
BannerRegular.Button = BannerButton

BannerRegular.displayName = 'BannerRegular'
