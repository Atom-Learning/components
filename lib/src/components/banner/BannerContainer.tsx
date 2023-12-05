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
      bold: {
        background: '$base11',
        color: '$foreground7plus',
        '--banner-heading-color': '$colors$foreground7plus',
        '--banner-text-color': '$colors$grey100'
      },
      subtle: {
        background: '$base3'
      },
      minimal: {
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
  onDismiss,
  dismissed,
  ...props
}: TBannerContainerProps): JSX.Element => {
  const { emphasis } = useBannerContext()

  return (
    <ColorScheme {...colorScheme} asChild>
      <Dismissible asChild onDismiss={onDismiss} dismissed={dismissed}>
        <StyledBannerContainer role="banner" emphasis={emphasis} {...props} />
      </Dismissible>
    </ColorScheme>
  )
}
