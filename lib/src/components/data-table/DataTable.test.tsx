import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createColumnHelper } from '@tanstack/react-table'
import { DataTable } from '.'

const columnHelper = createColumnHelper<{
  name: string
  hobby: string
}>()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('hobby', {
    cell: (info) => info.getValue()
  }),
  columnHelper.display({
    cell: (info) => <button>do something</button>,
    header: 'Actions'
  })
]

const data = [
  { name: 'chrissy', hobby: 'bare-knuckle boxing' },
  { name: 'agatha', hobby: 'crossfit' },
  { name: 'betty', hobby: 'acting' }
]

const TestTable = () => (
  <DataTable.Provider columns={columns} data={data}>
    <DataTable>
      <DataTable.Header sortable />
      <DataTable.Body />
    </DataTable>
    <DataTable.Pagination pageSize={5} />
  </DataTable.Provider>
)

describe(`EnhancedTable component`, () => {
  it('renders', async () => {
    const { container } = await render(<TestTable />)
    expect(container).toMatchSnapshot()
  })
})
