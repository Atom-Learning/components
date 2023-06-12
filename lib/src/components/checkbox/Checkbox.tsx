import { Minus, Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { Override } from '~/utilities/types'
import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledIndicator = styled(RadixCheckbox.Indicator, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)'
})

const StyledCheckbox = styled(RadixCheckbox.Root, {
  appearance: 'none',
  position: 'relative',
  backgroundColor: 'transparent',
  border: '1px solid $colors$tonal400',
  borderRadius: '3px',
  color: 'white',
  cursor: 'pointer',
  size: '$1',
  p: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 50ms ease-out',
  '&[data-state="checked"]': {
    backgroundColor: '$primary',
    borderColor: '$primary'
  },
  '&[data-state="indeterminate"]': {
    backgroundColor: '$primary',
    borderColor: '$primary'
  },
  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '1px'
  },
  '&[disabled]': {
    backgroundColor: '$tonal100',
    borderColor: '$tonal400',
    cursor: 'not-allowed',
    color: '$tonal400'
  },
  variants: {
    state: {
      error: {
        borderColor: '$danger'
      }
    },
    size: {
      md: {
        size: '$1'
      },
      lg: {
        size: '$2'
      }
    }
  }
})

type CheckboxSize = 'md' | 'lg'

const getIconSize = (size: CheckboxSize) => {
  if (size === 'md') return 14
  if (size === 'lg') return 22
  return 14
}

type CheckboxProps = React.ComponentProps<typeof StyledCheckbox> & {
  size?: CheckboxSize
}

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  ({ size, ...props }, ref) => (
    <StyledCheckbox {...props} size={size} ref={ref}>
      <StyledIndicator asChild>
        <Icon
          is={props.checked === 'indeterminate' ? Minus : Ok}
          css={{
            strokeWidth: '3',
            size: size ? getIconSize(size) : 14
          }}
        />
      </StyledIndicator>
    </StyledCheckbox>
  )
)

Checkbox.displayName = 'Checkbox'
