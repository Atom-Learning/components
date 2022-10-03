import * as React from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { debounce } from 'throttle-debounce'

import { SearchInput } from '../search-input'
import { useDataTable } from './DataTableContext'
import { Label } from '../label'
import { OptionallyVisuallyHiddenContainer } from '../../utilities/optionally-visually-hidden-container'

type DataTableSearchProps = React.ComponentProps<typeof SearchInput> & {
  label: string
  hideLabel?: boolean
}
export const DataTableGlobalFilter: React.FC<DataTableSearchProps> = ({
  onChange,
  label,
  hideLabel = false,
  ...props
}) => {
  const { setGlobalFilter, getState } = useDataTable()
  const { globalFilter } = getState()

  const handleChange = debounce(250, (event) => {
    const {
      target: { value }
    } = event

    onChange?.(event)
    setGlobalFilter(value)
  })

  return (
    <>
      <OptionallyVisuallyHiddenContainer hidden={hideLabel}>
        <Label css={{ mb: '$3' }} htmlFor={label}>
          {label}
        </Label>
      </OptionallyVisuallyHiddenContainer>
      <SearchInput
        {...props}
        value={globalFilter}
        onChange={handleChange}
        name={label}
      />
    </>
  )
}
