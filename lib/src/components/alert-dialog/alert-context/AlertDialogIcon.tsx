import { Danger, Info, OkCircle } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../../icon'

export type AlertDialogTheme = 'info' | 'warning' | 'danger' | 'success'

const StyledIcon = styled(Icon, {
  alignSelf: 'flex-start',
  variants: {
    theme: {
      info: { color: '$info' },
      warning: { color: '$warningMid' },
      danger: { color: '$danger', transform: 'rotate(180deg)' },
      success: { color: '$success' }
    }
  }
})

const iconMap: Record<
  AlertDialogTheme,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  info: Info,
  warning: Danger,
  danger: Info,
  success: OkCircle
}

export const AlertDialogIcon = ({ theme }: { theme: AlertDialogTheme }) => (
  <StyledIcon theme={theme} is={iconMap[theme]} />
)
