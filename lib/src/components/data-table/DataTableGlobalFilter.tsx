import * as React from 'react'
import { debounce } from 'throttle-debounce'

import { OptionalVisuallyHiddenWrapper } from '../../utilities/optional-visually-hidden-wrapper'
import { Label } from '../label'
import { SearchInput } from '../search-input'
import { AsyncDataState } from './DataTable.types'
import { useDataTable } from './DataTableContext'

type DataTableSearchProps = React.ComponentProps<typeof SearchInput> & {
  label: string
  hideLabel?: boolean
}
export const DataTableGlobalFilter = ({
  onChange,
  label,
  hideLabel = false,
  ...props
}: DataTableSearchProps) => {
  const {
    setGlobalFilter,
    getState,
    resetPagination,
    getTotalRows,
    asyncDataState
  } = useDataTable()
  const { globalFilter } = getState()

  const isPending = asyncDataState === AsyncDataState.PENDING
  const isEmpty = !isPending && getTotalRows() === 0

  if (isEmpty) return null

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
      <OptionalVisuallyHiddenWrapper hidden={hideLabel}>
        <Label css={{ mb: '$3' }} htmlFor={label}>
          {label}
        </Label>
      </OptionalVisuallyHiddenWrapper>
      <SearchInput
        {...props}
        defaultValue={globalFilter}
        onChange={handleChange}
        name={label}
      />
    </>
  )
}
