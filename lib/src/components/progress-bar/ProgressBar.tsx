import * as Progress from '@radix-ui/react-progress'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledProgressBar = styled(Progress.Root, {
  borderRadius: '$round',
  background: '$tonal100',
  height: '$0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  variants: {
    theme: {
      primary: { color: '$primary' },
      success: { color: '$success' },
      warning: { color: '$warning' },
      danger: { color: '$danger' }
    }
  }
})

const StyledIndicator = styled(Progress.Indicator, {
  backgroundColor: 'currentcolor',
  borderRadius: '$round',
  boxSizing: 'border-box',
  height: '100%',
  position: 'absolute',
  transition: 'all 300ms ease-out'
})

type ProgressBarProps = React.ComponentPropsWithoutRef<
  typeof StyledProgressBar
> &
  (
    | { id: string; 'aria-label'?: string }
    | { 'aria-label': string; id?: string }
  )

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  theme = 'primary',
  ...remainingProps
}) => (
  <StyledProgressBar theme={theme} {...remainingProps}>
    <StyledIndicator style={{ width: `${value}%` }} />
  </StyledProgressBar>
)

ProgressBar.displayName = 'ProgressBar'
