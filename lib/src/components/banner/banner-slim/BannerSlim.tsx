import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { Banner } from '../Banner'
import { BannerSlimActions } from './BannerSlimActions'
import { BannerSlimButton } from './BannerSlimButton'
import { BannerSlimContent } from './BannerSlimContent'
import { BannerSlimDismiss } from './BannerSlimDismiss'
import { BannerSlimImage } from './BannerSlimImage'
import { BannerSlimText } from './BannerSlimText'

const toDirection = {
  sm: 'column',
  md: 'row'
}

export const BannerSlim: React.FC<React.ComponentProps<typeof Banner>> & {
  Content: typeof BannerSlimContent
  Text: typeof BannerSlimText
  Image: typeof BannerSlimImage
  Button: typeof BannerSlimButton
  Dismiss: typeof BannerSlimDismiss
  Actions: typeof BannerSlimActions
} = (props) => {
  const { size } = props

  const direction = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toDirection[s]),
    [size]
  )

  return (
    <Banner direction={direction} fullWidth={false} align="center" {...props} />
  )
}

BannerSlim.Content = BannerSlimContent
BannerSlim.Text = BannerSlimText
BannerSlim.Image = BannerSlimImage
BannerSlim.Button = BannerSlimButton
BannerSlim.Dismiss = BannerSlimDismiss
BannerSlim.Actions = BannerSlimActions

BannerSlim.displayName = 'BannerSlim'
