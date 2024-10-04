import { Minus, Ok } from '@atom-learning/icons'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as React from 'react'

import { styled } from '~/stitches'
import { disabledStyle } from '~/utilities'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

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
  border: '1px solid $colors$grey800',
  borderRadius: '3px',
  color: 'white',
  cursor: 'pointer',
  size: '$1',
  p: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 50ms ease-out',
  flexShrink: 0,
  '&[data-state="checked"]': {
    backgroundColor: '$primary800',
    borderColor: '$primary800'
  },
  '&[data-state="indeterminate"]': {
    backgroundColor: '$primary800',
    borderColor: '$primary800'
  },
  '&:focus': {
    outline: '2px solid $primary800',
    outlineOffset: '1px'
  },
  '&[disabled]': disabledStyle,
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

export const Checkbox: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledCheckbox>
> = React.forwardRef(({ size = 'md', checked, ...rest }, ref) => {
  const iconSize = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toIconSize[s]),
    [size]
  )

  return (
    <StyledCheckbox ref={ref} checked={checked} size={size} {...rest}>
      <StyledIndicator asChild>
        <Icon
          is={checked === 'indeterminate' ? Minus : Ok}
          css={{
            strokeWidth: '3'
          }}
          size={iconSize}
        />
      </StyledIndicator>
    </StyledCheckbox>
  )
})

Checkbox.displayName = 'Checkbox'
