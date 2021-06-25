import * as React from 'react'

import { styled, theme } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'
import { Override } from '~/utilities/types'

console.log({ theme })

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'white',
  backgroundImage: encodeBackgroundIcon(theme.colors.primary.value, 'chevron'),
  backgroundPosition: 'right $space$3 top 50%, 0 0',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '$sizes$2 auto, 100%',
  border: '1px solid $tonal400',
  borderRadius: '$0',
  color: '$tonal900',
  display: 'block',
  fontFamily: '$body',
  fontSize: '$md',
  fontWeight: 400,
  height: '$4',
  lineHeight: 1.4,
  px: '$3',
  py: '$2',
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
  '&[disabled]': {
    backgroundImage: encodeBackgroundIcon(
      theme.colors.tonal600.value,
      'chevron'
    )
  },
  '&[disabled], > option[disabled]': {
    opacity: 0.7,
    backgroundColor: '$tonal300',
    cursor: 'not-allowed'
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
    <StyledSelect {...remainingProps} ref={ref}>
      {placeholder && (
        <option disabled selected hidden>
          {placeholder}
        </option>
      )}
      {children}
    </StyledSelect>
  )
)

Select.displayName = 'Select'
