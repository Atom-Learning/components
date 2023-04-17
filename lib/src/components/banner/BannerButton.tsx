import * as React from 'react'

import { Button } from '../button'
import { useBannerContext } from './BannerContext'

export const BannerButton: React.FC<React.ComponentProps<typeof Button>> = ({
  appearance,
  ...props
}) => {
  const { emphasis } = useBannerContext()

  return appearance === 'outline' ? (
    <Button
      appearance={appearance}
      theme={emphasis === 'hiContrast' ? 'neutral' : 'primary'}
      {...props}
    />
  ) : (
    <Button
      theme={emphasis === 'hiContrast' ? 'neutral' : 'primary'}
      {...props}
    />
  )
}

BannerButton.displayName = 'BannerButton'
