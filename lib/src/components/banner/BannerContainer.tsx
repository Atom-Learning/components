import * as React from 'react'

import { ColorScheme, TcolorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'

import { Dismissible } from '../dismissible'
import { Flex } from '../flex'
import { useBannerContext } from './BannerContext'

const StyledBannerContainer = styled(Flex, {
  position: 'relative',
  width: '100%',
  borderRadius: '$0',
  overflow: 'hidden',
  color: '$foreground',
  '--banner-heading-color': '$colors$foreground',
  '--banner-text-color': '$colors$grey900',
  variants: {
    emphasis: {
      highContrast: {
        background: '$base11',
        color: '$foreground7plus',
        '--banner-heading-color': '$colors$foreground7plus',
        '--banner-text-color': '$colors$grey100'
      },
      midContrast: {
        background: '$base3'
      },
      lowContrast: {
        background: '$base1'
      }
    },
    size: {
      sm: {},
      md: {}
    }
  }
})

export type TBannerContainerProps = React.ComponentProps<
  typeof StyledBannerContainer
> & {
  colorScheme?: TcolorScheme
} & React.ComponentProps<typeof Dismissible>

export const BannerContainer = ({
  colorScheme = {},
  value,
  onDismiss,
  ...props
}: TBannerContainerProps): JSX.Element => {
  const { emphasis } = useBannerContext()

  return (
    <ColorScheme {...colorScheme} asChild>
      <Dismissible asChild value={value} onDismiss={onDismiss}>
        <StyledBannerContainer role="banner" emphasis={emphasis} {...props} />
      </Dismissible>
    </ColorScheme>
  )
}
