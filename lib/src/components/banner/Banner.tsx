import * as React from 'react'

import { ColorScheme, TcolorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'

import { Dismissible } from '../dismissible'
import { Flex } from '../flex'
import { TBannerContextValue } from './Banner.types'
import { BannerContext } from './BannerContext'

const StyledBanner = styled(Flex, {
  position: 'relative',
  width: '100%',
  borderRadius: '$0',
  overflow: 'hidden',
  color: '$foreground',
  variants: {
    emphasis: {
      highContrast: {
        background: '$base11',
        color: '$foreground7plus'
      },
      midContrast: {
        background: '$base3'
      },
      lowContrast: {
        background: '$base1'
      }
    }
  }
})

type TBannerProps = TBannerContextValue &
  React.ComponentProps<typeof StyledBanner> &
  React.ComponentProps<typeof Dismissible> & {
    colorScheme: TcolorScheme
  }

export const Banner: React.FC<TBannerProps> & {
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
        <StyledBanner role="banner" emphasis={emphasis}>
          <BannerContext.Provider value={{ size, emphasis }}>
            {children}
          </BannerContext.Provider>
        </StyledBanner>
      </Dismissible>
    </ColorScheme>
  )
}

Banner.Dismiss = Dismissible.Trigger
Banner.displayName = 'Banner'
