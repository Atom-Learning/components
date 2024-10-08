import * as Progress from '@radix-ui/react-progress'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledProgressBar = styled(Progress.Root, {
  borderRadius: '$round',
  background: '$grey200',
  height: '$0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  variants: {
    theme: {
      primary: { color: '$primary800' },
      info: { color: '$info' },
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

export const ProgressBar = ({
  value,
  max = 100,
  theme = 'primary',
  ...remainingProps
}: ProgressBarProps) => (
  <StyledProgressBar value={value} max={max} theme={theme} {...remainingProps}>
    <StyledIndicator
      style={{
        width: '100%',
        transform: `translateX(-${100 - ((value || 0) / max) * 100}%)`
      }}
    />
  </StyledProgressBar>
)

ProgressBar.displayName = 'ProgressBar'
