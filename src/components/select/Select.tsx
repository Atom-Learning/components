import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

// TODO: extract this out in a util function
const svg = () =>
  '<svg xmlns="http://www.w3.org/2000/svg" width="292.4" height="292.4"><path fill="#1066b2" d="M287 69a18 18 0 00-13-5H18c-5 0-9 2-12 5a18 18 0 00-6 13c0 5 2 10 5 13l128 128c4 4 8 5 13 5s9-1 13-5L287 95c4-3 5-8 5-13s-2-9-5-13z"/></svg>'

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'white',
  backgroundImage: `url(data:image/svg+xml;charset=US-ASCII,${encodeURIComponent(
    svg()
  )})`,
  backgroundPosition: `right 16px top 50%, 0 0`, // TODO: $3 doesn't work, needs stitches upgrade to fix this
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '0.65em auto, 100%',
  borderRadius: '$0',
  border: '1px solid $tonal500',
  display: 'block',
  fontFamily: '$sans',
  fontSize: '$md',
  fontWeight: 400,
  height: '$2',
  letterSpacing: '0.01em',
  lineHeight: '1.4',
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
  '&[disabled], > option[disabled]': {
    opacity: '0.7',
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
