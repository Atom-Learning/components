import { styled } from '~/stitches'

import { Flex } from '../flex'

export const BannerContainer = styled(Flex, {
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
    },
    size: {
      sm: {},
      md: {}
    }
  }
})

export type TBannerContainerProps = React.ComponentProps<typeof BannerContainer>
