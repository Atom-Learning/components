import * as React from 'react'

import { Banner } from '../Banner'
import { BannerRegularActions } from './BannerRegularActions'
import { BannerRegularButton } from './BannerRegularButton'
import { BannerRegularContainer } from './BannerRegularContainer'
import { BannerRegularContent } from './BannerRegularContent'
import { BannerRegularDismiss } from './BannerRegularDismiss'
import { BannerRegularHeading } from './BannerRegularHeading'
import { BannerRegularImage } from './BannerRegularImage'
import { BannerRegularText } from './BannerRegularText'

export const BannerRegular: React.FC<
  React.ComponentProps<typeof BannerRegularContainer>
> & {
  Content: typeof BannerRegularContent
  Heading: typeof BannerRegularHeading
  Text: typeof BannerRegularText
  Actions: typeof BannerRegularActions
  Image: typeof BannerRegularImage
  Button: typeof BannerRegularButton
  Dismiss: typeof BannerRegularDismiss
} = ({ colorScheme, size, emphasis, onDismiss, ...rest }) => {
  return (
    <Banner size={size} emphasis={emphasis}>
      <BannerRegularContainer
        colorScheme={colorScheme}
        onDismiss={onDismiss}
        {...rest}
      />
    </Banner>
  )
}

BannerRegular.Content = BannerRegularContent
BannerRegular.Heading = BannerRegularHeading
BannerRegular.Text = BannerRegularText
BannerRegular.Actions = BannerRegularActions
BannerRegular.Image = BannerRegularImage
BannerRegular.Button = BannerRegularButton
BannerRegular.Dismiss = BannerRegularDismiss

BannerRegular.displayName = 'BannerRegular'
