import * as React from 'react'

import { BannerContainer } from '../BannerContainer'

type TBannerRegularContainerProps = Omit<
  React.ComponentProps<typeof BannerContainer>,
  'direction' | 'align' | 'wrap' | 'gap' | 'justify'
>

export const BannerRegularContainer = (props: TBannerRegularContainerProps) => (
  <BannerContainer {...props} />
)
