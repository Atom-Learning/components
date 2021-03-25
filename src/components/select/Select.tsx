import * as React from 'react'

import { styled } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'
import { Override } from '~/utilities/types'

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'white',
  backgroundImage: encodeBackgroundIcon('hsl(208,85%,38%)', 'chevron'),
  backgroundPosition: 'right $space$3 top 50%, 0 0',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '24px auto, 100%',
  border: '1px solid $tonal500',
  borderRadius: '$0',
  color: '$tonal900',
  display: 'block',
  fontFamily: '$sans',
  fontSize: '$md',
  fontWeight: 400,
  height: '$2',
  lineHeight: 1.4,
  px: '$3',
  py: '$2',
  transition: 'all 75ms ease-out',
  width: '100%',
  '&:hover': {
    cursor: 'pointer'
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$primary900',
    borderColor: '$primary900',
    outline: 'none'
  },
  '&::-ms-expand': {
    display: 'none'
  },
  '&[disabled]': {
    backgroundImage: encodeBackgroundIcon('hsl(0,0%,40%)', 'chevron')
  },
  '&[disabled], > option[disabled]': {
    opacity: 0.7,
    backgroundColor: '$tonal300',
    cursor: 'not-allowed'
  }
})

type SelectProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledSelect>,
  {
    as: never
    options?: {
      value: string
      label: string
      disabled?: boolean
    }[]
    defaultOption?: string
  } & (
    | { id: string; 'aria-label'?: string }
    | { 'aria-label': string; id?: string }
  )
>

export const Select: React.FC<SelectProps> = ({
  options,
  defaultOption,
  ...rest
}) => (
  <StyledSelect {...rest}>
    {defaultOption && <option> {defaultOption}</option>}
    {options &&
      options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
  </StyledSelect>
)

Select.displayName = 'Select'
