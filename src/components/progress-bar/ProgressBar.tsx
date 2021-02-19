import * as Progress from '@radix-ui/react-progress'
import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledProgressBar = styled(Progress.Root, {
  color: 'currentcolor',
  borderRadius: 25,
  minHeight: 12,
  maxHeight: 30,
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  variants: {
    type: {
      border: {
        border: '1px solid $tonal400',
        background: 'white'
      },
      background: {
        background: '$tonal300'
      }
    },
    size: {
      sm: {
        maxWidth: '6rem'
      },
      md: {
        maxWidth: '12rem'
      },
      lg: {
        maxWidth: '15rem'
      },
      xl: {
        maxWidth: '20rem'
      }
    }
  }
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
    value: number
    type: 'border' | 'background'
    color: string
    size: 'sm' | 'md' | 'lg' | 'xl'
  }
>
// TODO: color not working
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  type = 'border',
  size = 'sm',
  ...rest
}) => {
  return (
    <StyledProgressBar type={type} size={size} {...rest}>
      <StyledIndicator style={{ width: `${value}%` }} />
    </StyledProgressBar>
  )
}

ProgressBar.displayName = 'ProgressBar'
