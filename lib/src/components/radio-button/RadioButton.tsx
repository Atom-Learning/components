import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledRadioButton = styled(RadioGroup.Item, {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid $grey800',
  borderRadius: '$round',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  p: 0,
  size: '$1',
  variants: {
    size: {
      md: {
        size: '$1'
      },
      lg: {
        size: '$2',
        mt: '-$1'
      }
    }
  },
  transition: 'all 50ms ease-out',
  '&:focus': {
    outline: '2px solid $primary800',
    outlineOffset: '1px'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary800',
    borderColor: '$primary800'
  },
  '&[disabled]': {
    backgroundColor: '$grey200',
    borderColor: '$grey800',
    color: '$grey800',
    cursor: 'not-allowed'
  }
})

const StyledIndicator = styled(RadioGroup.Indicator, {
  size: '6px',
  borderRadius: '$round',
  backgroundColor: 'currentcolor',
  position: 'absolute',
  variants: {
    size: {
      md: {
        size: '6px'
      },
      lg: {
        size: '12px'
      }
    }
  }
})

type RadioButtonProps = Override<
  React.ComponentProps<typeof StyledRadioButton>,
  {
    as?: never
  } & {
    'aria-label'?: string
  }
>

export const RadioButton = ({ size, ...props }: RadioButtonProps) => {
  return (
    <StyledRadioButton {...props} size={size}>
      <StyledIndicator size={size} />
    </StyledRadioButton>
  )
}

RadioButton.displayName = 'RadioButton'
