import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledRadioButton = styled(RadioGroup.Item, {
  appearance: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  borderRadius: '$round',
  borderColor: '$secondary300',
  borderWidth: '2px',
  borderStyle: 'solid',
  size: '20px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  '&:focus': {
    outline: 'none'
  },
  ':checked + &': {
    backgroundColor: '$secondary300'
  },
  '[disabled] + &': {
    backgroundColor: '$tonal600',
    border: '2px solid $tonal600'
  }
})

const StyledIndicator = styled(RadioGroup.Indicator, {
  size: '$0',
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
