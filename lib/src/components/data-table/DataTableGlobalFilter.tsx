import * as React from 'react'
import { debounce } from 'throttle-debounce'

import { OptionallyVisuallyHiddenContainer } from '../../utilities/optionally-visually-hidden-container'
import { Label } from '../label'
import { SearchInput } from '../search-input'
import { useDataTable } from './DataTableContext'

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
  const { setGlobalFilter, getState, resetPagination } = useDataTable()
  const { globalFilter } = getState()

  const handleChange = debounce(250, (event) => {
    const {
      target: { value }
    } = event

    onChange?.(event)
    resetPagination()
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
        defaultValue={globalFilter}
        onChange={handleChange}
        name={label}
      />
    </>
  )
}
