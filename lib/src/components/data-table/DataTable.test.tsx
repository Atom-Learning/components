import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createColumnHelper } from '@tanstack/react-table'
import { DataTable } from '.'
import { Tooltip } from '../tooltip'
import { TooltipPortal } from '@radix-ui/react-tooltip'

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
  { name: 'betty', hobby: 'acting' },
  { name: 'denise', hobby: 'bare-knuckle boxing' },
  { name: 'charlie', hobby: 'crossfit' },
  { name: 'xena', hobby: 'acting' },
  { name: 'rick', hobby: 'bare-knuckle boxing' },
  { name: 'phillip', hobby: 'crossfit' },
  { name: 'maurice', hobby: 'acting' },
  { name: 'peter', hobby: 'bare-knuckle boxing' },
  { name: 'velma', hobby: 'crossfit' },
  { name: 'max', hobby: 'acting' },
  { name: 'maxine', hobby: 'bare-knuckle boxing' },
  { name: 'siobhan', hobby: 'crossfit' },
  { name: 'nelly', hobby: 'acting' },
  { name: 'kris', hobby: 'bare-knuckle boxing' },
  { name: 'tony', hobby: 'crossfit' },
  { name: 'tina', hobby: 'acting' }
]

const PaginationWithToolTipProvider: React.FC<
  React.ComponentProps<typeof DataTable.Pagination>
> = (props) => (
  <Tooltip.Provider>
    <DataTable.Pagination {...props} />
  </Tooltip.Provider>
)

describe('DataTable component', () => {
  it('renders', () => {
    const { container } = render(
      <DataTable columns={columns} data={data}>
        <DataTable.GlobalFilter label="User search" css={{ mb: '$4' }} />
        <DataTable.Table sortable css={{ mb: '$4' }} />
        <PaginationWithToolTipProvider pageSize={5} />
      </DataTable>
    )
    expect(container).toMatchSnapshot()
  })

  it('Sorts data according to defaultSort config', () => {
    render(
      <DataTable
        columns={columns}
        data={data}
        defaultSort={{ column: 'name', direction: 'desc' }}
      >
        <DataTable.Table />
        <PaginationWithToolTipProvider pageSize={1} />
      </DataTable>
    )

    expect(screen.getByText('xena')).toBeVisible()
  })

  it('Sorts data on click of sortable header cell', () => {
    render(
      <DataTable columns={columns} data={data}>
        <DataTable.Table sortable />
        <PaginationWithToolTipProvider pageSize={5} />
      </DataTable>
    )
    const nameHeader = screen.getByText('name')

    userEvent.click(nameHeader) // Sorts ascending
    expect(screen.getByText('agatha')).toBeVisible()
    expect(screen.queryByText('xena')).not.toBeInTheDocument()

    userEvent.click(nameHeader) // Sorts descending
    expect(screen.getByText('xena')).toBeVisible()
    expect(screen.queryByText('agatha')).not.toBeInTheDocument()
  })
})

describe('DataTable.Pagination component', () => {
  it('Displays the correct page number', () => {
    render(
      <DataTable columns={columns} data={data}>
        <DataTable.Table sortable />
        <PaginationWithToolTipProvider pageSize={5} />
      </DataTable>
    )

    expect(screen.getByRole('combobox')).toHaveValue('0')
    expect(screen.getByText('of 4 pages')).toBeVisible()

    const nextPageButton = screen.getByLabelText('Next page')
    userEvent.click(nextPageButton)
    waitFor(
      async () => await expect(screen.getByRole('combobox')).toHaveValue('1')
    )
  })

  it('Navigates to the correct page', () => {
    render(
      <DataTable columns={columns} data={data}>
        <DataTable.Table sortable />
        <PaginationWithToolTipProvider pageSize={10} />
      </DataTable>
    )

    const options = screen.getAllByRole('option')
    userEvent.click(options[1])

    waitFor(async () => expect(screen.getByRole('combobox')).toHaveValue('1'))
  })

  it('Disables previous button on first page and next page button on last page', () => {
    render(
      <DataTable columns={columns} data={data}>
        <DataTable.Table sortable />
        <PaginationWithToolTipProvider pageSize={10} />
      </DataTable>
    )

    const previousPageButton = screen.getByRole('button', {
      name: 'Previous page'
    })
    expect(previousPageButton).toBeDisabled()

    const nextPageButton = screen.getByRole('button', { name: 'Next page' })
    userEvent.click(nextPageButton)

    waitFor(async () => await expect(nextPageButton).toBeDisabled())
  })
})

describe('DataTable Search component', () => {
  it('Filters table based on any column', () => {
    render(
      <DataTable columns={columns} data={data}>
        <DataTable.GlobalFilter label="Search" />
        <DataTable.Table sortable />
      </DataTable>
    )

    const search = screen.getByRole('searchbox')
    userEvent.type(search, 'ch')

    waitFor(async () => {
      expect(screen.getByText('chrissy')).toBeVisible()
      expect(screen.getByText('charlie')).toBeVisible()
      expect(screen.getByText('xena')).not.toBeVisible()
    })

    userEvent.type(search, 'crossfit')
    waitFor(async () => {
      expect(screen.getByText('agatha')).toBeVisible()
    })
  })
})
