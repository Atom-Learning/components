import * as React from 'react'
import { debounce } from 'throttle-debounce'

import { SearchInput } from '../search-input'
import { useDataTable } from './DataTableContext'
import { Label } from '../label'

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
      <Label
        css={{ mb: '$3', visibility: hideLabel ? 'hidden' : 'initial' }}
        htmlFor={label}
      >
        {label}
      </Label>
      <SearchInput
        {...props}
        value={globalFilter}
        onChange={handleChange}
        name={label}
      />
    </>
  )
}
