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

const BannerRegularComponent = ({
  colorScheme,
  size,
  emphasis,
  onDismiss,
  ...rest
}: React.ComponentProps<typeof BannerRegularContainer>) => (
  <Banner size={size} emphasis={emphasis}>
    <BannerRegularContainer
      colorScheme={colorScheme}
      onDismiss={onDismiss}
      {...rest}
    />
  </Banner>
)

export const BannerRegular = Object.assign(BannerRegularComponent, {
  Content: BannerRegularContent,
  Heading: BannerRegularHeading,
  Text: BannerRegularText,
  Actions: BannerRegularActions,
  Image: BannerRegularImage,
  Button: BannerRegularButton,
  Dismiss: BannerRegularDismiss
})

BannerRegularComponent.displayName = 'BannerRegular'
