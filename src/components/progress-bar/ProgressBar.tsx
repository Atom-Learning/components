import * as Progress from '@radix-ui/react-progress'
import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const getSolidVariant = (color) => ({
  background: '$tonal100',
  color
})

const getOutlineVariant = (color) => ({
  border: '1px solid $tonal200',
  background: 'white',
  color
})

const StyledProgressBar = styled(Progress.Root, {
  borderRadius: '$round',
  height: '12px',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  variants: {
    appearance: {
      outline: {},
      solid: {}
    },
    theme: {
      primary: {},
      secondary: {},
      tertiary: {},
      success: {},
      warning: {},
      danger: {}
    }
  },
  compoundVariants: [
    // Appearance Solid
    {
      theme: 'primary',
      appearance: 'solid',
      css: getSolidVariant('$primary')
    },
    {
      theme: 'secondary',
      appearance: 'solid',
      css: getSolidVariant('$secondary')
    },
    {
      theme: 'tertiary',
      appearance: 'solid',
      css: getSolidVariant('$tertiary')
    },
    {
      theme: 'success',
      appearance: 'solid',
      css: getSolidVariant('$success')
    },
    {
      theme: 'warning',
      appearance: 'solid',
      css: getSolidVariant('$warning')
    },
    {
      theme: 'danger',
      appearance: 'solid',
      css: getSolidVariant('$danger')
    },

    // Appearance Outline
    {
      theme: 'primary',
      appearance: 'outline',
      css: getOutlineVariant('$primary')
    },
    {
      theme: 'secondary',
      appearance: 'outline',
      css: getOutlineVariant('$secondary')
    },
    {
      theme: 'tertiary',
      appearance: 'outline',
      css: getOutlineVariant('$tertiary')
    },
    {
      theme: 'success',
      appearance: 'outline',
      css: getOutlineVariant('$success')
    },
    {
      theme: 'warning',
      appearance: 'outline',
      css: getOutlineVariant('$warning')
    },
    {
      theme: 'danger',
      appearance: 'outline',
      css: getOutlineVariant('$danger')
    }
  ]
})

const StyledIndicator = styled(Progress.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  backgroundColor: 'currentcolor',
  height: '100%'
})

type ProgressBarProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledProgressBar>,
  {
    appearance?: 'outline' | 'solid'
    theme?:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'success'
      | 'warning'
      | 'danger'
  } & (
    | { id: string; 'aria-label'?: string }
    | { 'aria-label': string; id?: string }
  )
>

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  appearance = 'outline',
  theme = 'primary',
  ...remainingProps
}) => (
  <StyledProgressBar appearance={appearance} theme={theme} {...remainingProps}>
    <StyledIndicator style={{ width: `${value}%` }} />
  </StyledProgressBar>
)

ProgressBar.displayName = 'ProgressBar'
