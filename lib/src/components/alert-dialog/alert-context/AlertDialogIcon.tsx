import * as React from 'react'
import { Info, Danger, OkCircle } from '@atom-learning/icons'
import { styled } from '~/stitches'

import { Icon } from '../../icon'

export type AlertDialogTheme = 'info' | 'warning' | 'danger' | 'success'

const StyledIcon = styled(Icon, {
  flexShrink: 0,
  alignSelf: 'flex-start',
  variants: {
    theme: {
      info: { color: '$blue800' },
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
