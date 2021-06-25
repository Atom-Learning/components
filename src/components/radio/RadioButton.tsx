import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledRadioButton = styled(RadioGroup.Item, {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid $tonal600',
  borderRadius: '$round',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  p: 0,
  size: '$1',
  transition: 'all 50ms ease-out',
  '&:hover': {
    outline: 'none'
  },
  '&:focus': {
    outline: 'none'
  },
  ':checked + &': {
    backgroundColor: '$primary',
    borderColor: '$primary'
  },
  '[disabled] + &': {
    backgroundColor: '$tonal600',
    border: '2px solid $tonal600'
  }
})

const StyledIndicator = styled(RadioGroup.Indicator, {
  size: '6px',
  borderRadius: '$round',
  backgroundColor: 'white'
})

type RadioButtonProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledRadioButton>,
  {
    as: never
  } & {
    'aria-label'?: string
  }
>

export const RadioButton: React.FC<RadioButtonProps> = (props) => (
  <StyledRadioButton {...props}>
    <StyledIndicator />
  </StyledRadioButton>
)

RadioButton.displayName = 'RadioButton'
