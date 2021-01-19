import * as React from 'react'
import { styled } from '../../stitches'

export type Option = {
  label: string
  value: string
}

export type SelectProps = {
  name: string
  options: Array<Option>
  placeholder?: string
}

const StyledSelect = styled('select', {
  p: '$3',
  color: 'red',
  backgroundColor: 'papayawhip',
  fontSize: '$md'
})

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
