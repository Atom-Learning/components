import * as React from 'react'

import { Button } from '../button'
import { useBannerContext } from './BannerContext'

export const BannerButton: React.FC<React.ComponentProps<typeof Button>> = (
  props
) => {
  const { emphasis, size } = useBannerContext()

  return (
    <Button
      size={size}
      theme={emphasis === 'hiContrast' ? 'neutral' : 'primary'}
      {...props}
    />
  )
}

BannerButton.displayName = 'BannerButton'
