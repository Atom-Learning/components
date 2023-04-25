import * as React from 'react'

import { Banner } from './Banner'
import { BannerActions } from './BannerActions'
import { BannerButton } from './BannerButton'
import { BannerContent } from './BannerContent'
import { BannerDismiss } from './BannerDismiss'
import { BannerHeading } from './BannerHeading'
import { BannerImage } from './BannerImage'
import { BannerText } from './BannerText'

export const BannerRegular: React.FC<React.ComponentProps<typeof Banner>> & {
  Content: typeof BannerContent
  Heading: typeof BannerHeading
  Text: typeof BannerText
  Actions: typeof BannerActions
  Image: typeof BannerImage
  Button: typeof BannerButton
  Dismiss: typeof BannerDismiss
} = (props) => {
  return <Banner {...props} />
}

BannerRegular.Content = BannerContent
BannerRegular.Heading = BannerHeading
BannerRegular.Text = BannerText
BannerRegular.Actions = BannerActions
BannerRegular.Image = BannerImage
BannerRegular.Button = BannerButton
BannerRegular.Dismiss = BannerDismiss

BannerRegular.displayName = 'BannerRegular'
