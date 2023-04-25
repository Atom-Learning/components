import * as React from 'react'

import { ColorScheme, TcolorScheme } from '~/experiments/color-scheme'

import { Dismissible } from '../dismissible'
import { BannerContainer, TBannerContainerProps } from './BannerContainer'
import { BannerContext } from './BannerContext'

type TDismissibleProps = React.ComponentProps<typeof Dismissible>

interface IBannerProps extends TBannerContainerProps {
  colorScheme: TcolorScheme
  value?: TDismissibleProps['value']
  onDismiss?: TDismissibleProps['onDismiss']
}

export const Banner: React.FC<IBannerProps> & {
  Dismiss: typeof Dismissible.Trigger
} = ({
  children,
  size = {
    '@initial': 'sm',
    '@md': 'md'
  },
  colorScheme,
  emphasis,
  value = 'dismiss-banner-regular',
  onDismiss
}) => {
  return (
    <ColorScheme {...colorScheme} asChild>
      <Dismissible asChild value={value} onDismiss={onDismiss}>
        <BannerContainer role="banner" emphasis={emphasis}>
          <BannerContext.Provider value={{ emphasis, size }}>
            {children}
          </BannerContext.Provider>
        </BannerContainer>
      </Dismissible>
    </ColorScheme>
  )
}

Banner.Dismiss = Dismissible.Trigger
Banner.displayName = 'Banner'
