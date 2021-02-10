import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'white',
  backgroundImage:
    'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%0A%20%20%3Cpath%20fill%3D%22%230f65b2%22%20d%3D%22M287%2069a18%2018%200%2000-13-5H18c-5%200-9%202-12%205a18%2018%200%2000-6%2013c0%205%202%2010%205%2013l128%20128c4%204%208%205%2013%205s9-1%2013-5L287%2095c4-3%205-8%205-13s-2-9-5-13z%22%2F%3E%0A%3C%2Fsvg%3E")',
  backgroundPosition: `right 16px top 50%, 0 0`, // TODO: layout-scale $3 doesn't work
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '0.65em auto, 100%',
  borderRadius: '$0',
  border: '1px solid $tonal500',
  display: 'block',
  fontFamily: '$sans',
  fontWeight: 400,
  height: '$2',
  letterSpacing: '0.01em',
  lineHeight: '1.4',
  px: '$3',
  py: '$2',
  transition: 'all 75ms ease-out',
  width: '100%',
  ':hover': {
    cursor: 'pointer'
  },
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $primary900',
    borderColor: '$primary900',
    outline: 'none'
  },
  '&::-ms-expand': {
    display: 'none'
  },
  ':disabled, > option:disabled': {
    opacity: '0.7',
    backgroundColor: '$tonal300',
    cursor: 'not-allowed'
  }
})

type SelectProps = Override<
  StitchesProps<typeof StyledSelect>,
  {
    options?: {
      value: string
      label: string
      disabled?: boolean
    }[]
    defaultOption?: string
  } & ({ id: string } | { 'aria-label': string })
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
