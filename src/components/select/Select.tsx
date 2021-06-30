import * as React from 'react'

import { styled, theme } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'
import { Override } from '~/utilities/types'

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'white',
  backgroundImage: encodeBackgroundIcon(theme.colors.tonal500.value, 'chevron'),
  backgroundPosition: 'right $space$3 top 50%, 0 0',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '20px auto, 100%',
  border: '1px solid $tonal400',
  borderRadius: '$0',
  color: '$tonal800',
  display: 'block',
  fontFamily: '$body',
  fontSize: '$md',
  fontWeight: 400,
  height: '$4',
  lineHeight: 1.4,
  pl: '$3',
  pr: '$6',
  transition: 'all 75ms ease-out',
  width: '100%',
  '&:hover': {
    cursor: 'pointer'
  },
  '&:focus': {
    borderColor: '$primary',
    outline: 'none'
  },
  '&::-ms-expand': {
    display: 'none'
  },
  '&[disabled], > option[disabled]': {
    backgroundColor: '$tonal100',
    color: '$tonal600',
    cursor: 'not-allowed'
  },
  variants: {
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})

export type SelectProps = Override<
  React.ComponentProps<typeof StyledSelect>,
  {
    as?: never
    placeholder?: string
  }
  // TODO: figure out why uncommenting this causes TS errors in
  // component declaration
  // & (
  //   | { id: string; 'aria-label'?: string }
  //   | { 'aria-label': string; id?: string }
  // )
>

export const Select: React.FC<SelectProps> = React.forwardRef(
  ({ placeholder, children, ...remainingProps }, ref) => (
    <StyledSelect defaultValue="" {...remainingProps} ref={ref}>
      {placeholder && (
        <option disabled hidden value="">
          {placeholder}
        </option>
      )}
      {children}
    </StyledSelect>
  )
)

Select.displayName = 'Select'
