import * as React from 'react'

import { ColorScheme, TcolorScheme } from '~/experiments/color-scheme'

import { Dismissible } from '../dismissible'
import { BannerContainer, TBannerContainerProps } from './BannerContainer'
import { BannerProvider } from './BannerContext'

type TDismissibleProps = React.ComponentProps<typeof Dismissible>

interface IBannerProps extends TBannerContainerProps {
  colorScheme: TcolorScheme
  value?: TDismissibleProps['value']
  onDismiss?: TDismissibleProps['onDismiss']
  fullWidth?: boolean
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
  emphasis = 'lowContrast',
  value = 'dismiss-banner-regular',
  onDismiss,
  fullWidth = true,
  ...props
}) => {
  return (
    <ColorScheme {...colorScheme} asChild>
      <Dismissible asChild value={value} onDismiss={onDismiss}>
        <BannerContainer
          role="banner"
          emphasis={emphasis}
          fullWidth={fullWidth}
          {...props}
        >
          <BannerProvider emphasis={emphasis} size={size}>
            {children}
          </BannerProvider>
        </BannerContainer>
      </Dismissible>
    </ColorScheme>
  )
}

Banner.Dismiss = Dismissible.Trigger
Banner.displayName = 'Banner'
