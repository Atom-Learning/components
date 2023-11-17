import { Minus, Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { styled } from '~/stitches'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'
import { disabledStyle } from '~/utilities'

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
    ...disabledStyle()
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
        size: '$2',
        mt: '-$1'
      }
    }
  }
})

const toIconSize = {
  md: 'sm',
  lg: 'md'
}

type CheckboxProps = React.ComponentProps<typeof StyledCheckbox>

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  ({ size = 'md', ...props }, ref) => {
    const iconSize = React.useMemo(
      () => overrideStitchesVariantValue(size, (s) => toIconSize[s]),
      [size]
    )

    return (
      <StyledCheckbox {...props} size={size} ref={ref}>
        <StyledIndicator asChild>
          <Icon
            is={props.checked === 'indeterminate' ? Minus : Ok}
            css={{
              strokeWidth: '3'
            }}
            size={iconSize}
          />
        </StyledIndicator>
      </StyledCheckbox>
    )
  }
)

Checkbox.displayName = 'Checkbox'
