import { Danger, Error, Info, OkCircle } from '@atom-learning/icons'
import * as React from 'react'

import type { CSS } from '~/stitches'

import { InlineMessageTheme } from './InlineMessage.types'

export const INLINE_MESSAGE_THEMES: Record<InlineMessageTheme, CSS> = {
  success: { color: '$success' },
  warning: { color: '$warningText', '& svg': { color: '$warningDark' } },
  info: { color: '$primary' },
  neutral: { color: '$tonal400' },
  error: { color: '$danger' }
}

export const INLINE_MESSAGE_ICONS: Record<
  InlineMessageTheme,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  success: OkCircle,
  warning: Danger,
  info: Info,
  neutral: Info,
  error: Error
}
