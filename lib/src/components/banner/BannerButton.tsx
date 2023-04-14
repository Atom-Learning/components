import * as React from 'react'

import { Button } from '../button'
import { resolveEmphasis } from './Banner.utils'
import { useBannerContext } from './BannerContext'

export const BannerButton: React.FC<React.ComponentProps<typeof Button>> = ({
  css,
  appearance,
  ...props
}) => {
  const { emphasis } = useBannerContext()
  const primaryBackground = resolveEmphasis('primaryButtonBackground', emphasis)
  const primaryColor = resolveEmphasis('primaryButtonColor', emphasis)
  const secondaryBackground = resolveEmphasis(
    'secondaryButtonBackground',
    emphasis
  )
  const secondaryColor = resolveEmphasis('secondaryButtonColor', emphasis)

  return appearance === 'outline' ? (
    <Button
      css={{ color: secondaryColor, background: secondaryBackground, ...css }}
      appearance={appearance}
      {...props}
    />
  ) : (
    <Button
      css={{ color: primaryColor, background: primaryBackground, ...css }}
      {...props}
    />
  )
}

BannerButton.displayName = 'BannerButton'
