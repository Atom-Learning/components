import * as React from 'react'

import { Banner } from '../Banner'
import { BannerContainer } from '../BannerContainer'
import { BannerSlimActions } from './BannerSlimActions'
import { BannerSlimButton } from './BannerSlimButton'
import { BannerSlimContainer } from './BannerSlimContainer'
import { BannerSlimContent } from './BannerSlimContent'
import { BannerSlimDismiss } from './BannerSlimDismiss'
import { BannerSlimImage } from './BannerSlimImage'
import { BannerSlimText } from './BannerSlimText'

const BannerSlimComponent = ({
  colorScheme,
  size,
  emphasis,
  onDismiss,
  ...rest
}: React.ComponentProps<typeof Banner> &
  React.ComponentProps<typeof BannerContainer>) => (
  <Banner size={size} emphasis={emphasis}>
    <BannerSlimContainer
      colorScheme={colorScheme}
      onDismiss={onDismiss}
      {...rest}
    />
  </Banner>
)

export const BannerSlim = Object.assign(BannerSlimComponent, {
  Content: BannerSlimContent,
  Text: BannerSlimText,
  Image: BannerSlimImage,
  Button: BannerSlimButton,
  Dismiss: BannerSlimDismiss,
  Actions: BannerSlimActions
})

BannerSlimComponent.displayName = 'BannerSlim'
