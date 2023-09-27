import * as React from 'react'

import { styled } from '~/stitches'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { BannerContainer } from '../BannerContainer'
import { useBannerContext } from '../BannerContext'

const toDirection = {
  sm: 'column',
  md: 'row'
}

const toAlign = {
  sm: 'flex-start',
  md: 'center'
}

const toWrap = {
  sm: 'wrap',
  md: 'nowrap'
}

const StyledBannerSlimContainer = styled(BannerContainer, {
  p: '$4',
  variants: {
    sizeWorkaround: {
      sm: {},
      md: {
        px: '$24'
      }
    }
  }
})

export const BannerSlimContainer = (
  props: React.ComponentProps<typeof StyledBannerSlimContainer>
): JSX.Element => {
  const { size } = useBannerContext()

  const direction = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toDirection[s]),
    [size]
  )

  const align = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toAlign[s]),
    [size]
  )

  const wrap = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toWrap[s]),
    [size]
  )

  return (
    <StyledBannerSlimContainer
      direction={direction}
      align={align}
      sizeWorkaround={size}
      gap={4}
      wrap={wrap}
      {...props}
    />
  )
}

BannerSlimContainer.displayName = 'BannerSlimContainer'
