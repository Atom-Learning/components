import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'

const StyledSelect = styled('select', {
  backgroundColor: 'papayawhip',
  color: 'red',
  fontSize: '$md',
  p: '$3'
})

export type Option = {
  label: string
  value: string
}

export type SelectProps = StitchesProps<typeof StyledSelect> & {
  name: string
  options: Array<Option>
  placeholder?: string
}

export const Select = ({
  options,
  placeholder,
  name,
  ...rest
}: SelectProps) => {
  return (
    <StyledSelect {...rest}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  )
}

Select.displayName = 'Select'
