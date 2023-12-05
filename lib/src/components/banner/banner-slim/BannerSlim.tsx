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

export const BannerSlim: React.FC<
  React.ComponentProps<typeof Banner> &
    React.ComponentProps<typeof BannerContainer>
> & {
  Content: typeof BannerSlimContent
  Text: typeof BannerSlimText
  Image: typeof BannerSlimImage
  Button: typeof BannerSlimButton
  Dismiss: typeof BannerSlimDismiss
  Actions: typeof BannerSlimActions
} = ({ colorScheme, size, emphasis, onDismiss, ...rest }) => {
  return (
    <Banner size={size} emphasis={emphasis}>
      <BannerSlimContainer
        colorScheme={colorScheme}
        onDismiss={onDismiss}
        {...rest}
      />
    </Banner>
  )
}

BannerSlim.Content = BannerSlimContent
BannerSlim.Text = BannerSlimText
BannerSlim.Image = BannerSlimImage
BannerSlim.Button = BannerSlimButton
BannerSlim.Dismiss = BannerSlimDismiss
BannerSlim.Actions = BannerSlimActions

BannerSlim.displayName = 'BannerSlim'
