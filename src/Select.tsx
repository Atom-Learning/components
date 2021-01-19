import * as React from 'react'
import { styled } from './stitches'

export type Option = {
  label: string
  value: string
}

export type SelectProps = {
  name: string
  options: Array<Option>
  placeholder?: string
  ref: any
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
  ref,
  ...rest
}: SelectProps) => {
  return (
    <StyledSelect ref={ref} {...rest}>
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

// export const Thing = () => (
//   <Box
//     as="aside"
//     css={{
//       px: '$3', // 16px
//       color: '$primary',
//       fontSize: '$sm'
//     }}
//   />
// )

// <aside class="iubsdfib"></aside>

// export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
//   ({ name, options, placeholder, ...rest }, ref) => (
//     <select ref={ref} {...rest}>
//       {placeholder && <option value="">{placeholder}</option>}
//       {options.map(({ label, value }) => (
//         <option key={value} value={value}>
//           {label}
//         </option>
//       ))}
//     </select>
//   )
// )
