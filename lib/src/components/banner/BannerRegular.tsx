import * as React from 'react'

import { ColorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'
import { findChildByType } from '~/utilities'

import { Dismissible } from '../dismissible'
import { Flex } from '../flex'
import { IBannerContextValue } from './Banner.types'
import { BannerActions } from './BannerActions'
import { BannerButton } from './BannerButton'
import { BannerContent } from './BannerContent'
import { BannerContext } from './BannerContext'
import { BannerDismiss } from './BannerDismiss'
import { BannerHeading } from './BannerHeading'
import { BannerImage } from './BannerImage'
import { BannerText } from './BannerText'

interface IBannerRegularProps extends IBannerContextValue {
  size: 'sm' | 'md'
  dismissibleValue?: React.ComponentProps<typeof Dismissible>['value']
  onDismiss?: React.ComponentProps<typeof Dismissible>['onDismiss']
}
const Container = styled(Flex, {
  borderRadius: '$0',
  overflow: 'hidden',
  '& > :first-child': {
    flex: 2
  },
  '& > :last-child': {
    flex: 'auto'
  },
  variants: {
    size: {
      sm: {
        maxWidth: '736px'
      },
      md: {
        minWidth: '736px'
      }
    }
  }
})

export const BannerRegular: React.FC<IBannerRegularProps> & {
  Content: typeof BannerContent
  Heading: typeof BannerHeading
  Text: typeof BannerText
  Actions: typeof BannerActions
  Image: typeof BannerImage
  Button: typeof BannerButton
  Dismiss: typeof BannerDismiss
} = ({
  children,
  size = 'md',
  colorScheme,
  emphasis,
  dismissibleValue = 'dismiss-banner-regular',
  onDismiss
}) => {
  const content = findChildByType(children, BannerContent)
  const image = findChildByType(children, BannerImage)
  const dismiss = findChildByType(children, BannerDismiss)

  return (
    <ColorScheme {...colorScheme} css={{ position: 'relative' }} role="banner">
      <Dismissible value={dismissibleValue} asChild onDismiss={onDismiss}>
        <BannerContext.Provider value={{ colorScheme, size, emphasis }}>
          {dismiss}
          <Container size={size}>
            {content}
            {image}
          </Container>
        </BannerContext.Provider>
      </Dismissible>
    </ColorScheme>
  )
}

BannerRegular.Content = BannerContent
BannerRegular.Heading = BannerHeading
BannerRegular.Text = BannerText
BannerRegular.Actions = BannerActions
BannerRegular.Image = BannerImage
BannerRegular.Button = BannerButton
BannerRegular.Dismiss = BannerDismiss

BannerRegular.displayName = 'BannerRegular'
