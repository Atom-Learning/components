import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { Button } from '../button'
import { useBannerContext } from './BannerContext'

export const BannerButton: React.FC<React.ComponentProps<typeof Button>> = (
  props
) => {
  const { emphasis, size } = useBannerContext()

  const fullWidth = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => s === 'sm'),
    [size]
  )

  return (
    <Button
      size={size}
      fullWidth={fullWidth}
      theme={emphasis === 'highContrast' ? 'neutral' : 'primary'}
      {...props}
    />
  )
}

BannerButton.displayName = 'BannerButton'
