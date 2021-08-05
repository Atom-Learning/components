import * as React from 'react'

import { styled, theme } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'
import { Override } from '~/utilities/types'

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'white',
  backgroundImage: encodeBackgroundIcon(theme.colors.tonal500.value, 'chevron'),
  backgroundRepeat: 'no-repeat, repeat',
  border: '1px solid $tonal500',
  borderRadius: '$0',
  color: '$tonal800',
  display: 'block',
  fontFamily: '$body',
  fontWeight: 400,
  lineHeight: 1.4,
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
    size: {
      sm: {
        backgroundPosition: 'right $space$2 top 50%, 0 0',
        backgroundSize: '18px auto, 100%',
        fontSize: '$sm',
        height: '$3',
        pl: '$2',
        pr: '$5'
      },
      md: {
        backgroundPosition: 'right $space$3 top 50%, 0 0',
        backgroundSize: '20px auto, 100%',
        fontSize: '$md',
        height: '$4',
        pl: '$3',
        pr: '$6'
      }
    },
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
  ({ placeholder, children, size = 'md', ...remainingProps }, ref) => (
    <StyledSelect size={size} defaultValue="" {...remainingProps} ref={ref}>
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
