import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createColumnHelper } from '@tanstack/react-table'
import { DataTable } from '.'
import { Tooltip } from '../tooltip'

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

/** `DataTable.Pagination` uses `Tooltip`s so it needs a `Tooltip.Provider`.
 * In practice, `Tooltip.Provider` is rendered once at the root of an app,
 * but this wrapper provides it for these tests.
 */
const Wrapper: React.FC = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('DataTable component', () => {
  it('renders', () => {
    const { container } = render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.GlobalFilter label="User search" css={{ mb: '$4' }} />
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination pageSize={5} />
        </DataTable>
      </Wrapper>
    )
    expect(container).toMatchSnapshot()
  })

  it('Sorts data according to defaultSort config', () => {
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          data={data}
          defaultSort={{ column: 'name', direction: 'desc' }}
        >
          <DataTable.Table />
          <DataTable.Pagination pageSize={1} />
        </DataTable>
      </Wrapper>
    )

    expect(screen.getByText('xena')).toBeVisible()
  })

  it('Sorts data on click of sortable header cell', () => {
    render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.Table sortable />
          <DataTable.Pagination pageSize={5} />
        </DataTable>
      </Wrapper>
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
  it('Displays the correct page number', async () => {
    render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.Table sortable />
          <DataTable.Pagination pageSize={5} />
        </DataTable>
      </Wrapper>
    )

    expect(screen.getByRole('combobox')).toHaveValue('0')
    expect(screen.getByText('of 4 pages')).toBeVisible()

    const nextPageButton = screen.getByLabelText('Next page')
    userEvent.click(nextPageButton)
    await waitFor(() => expect(screen.getByRole('combobox')).toHaveValue('1'))
  })

  it('Navigates to the correct page', async () => {
    render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.Table sortable />
          <DataTable.Pagination pageSize={5} />
        </DataTable>
      </Wrapper>
    )

    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '2' })
    )

    await waitFor(() => expect(screen.getByRole('combobox')).toHaveValue('1'))
  })

  it('Disables previous button on first page and next page button on last page', async () => {
    render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.Table sortable />
          <DataTable.Pagination pageSize={10} />
        </DataTable>
      </Wrapper>
    )

    const previousPageButton = screen.getByRole('button', {
      name: 'Previous page'
    })
    expect(previousPageButton).toBeDisabled()

    const nextPageButton = screen.getByRole('button', { name: 'Next page' })
    userEvent.click(nextPageButton)

    await waitFor(() => expect(nextPageButton).toBeDisabled())
  })
})

describe('DataTable Search component', () => {
  it('Filters table based on any column', async () => {
    render(
      <DataTable columns={columns} data={data}>
        <DataTable.GlobalFilter label="Search" />
        <DataTable.Table sortable />
      </DataTable>
    )

    const search = screen.getByRole('searchbox')
    userEvent.type(search, 'ch')

    await waitFor(() => {
      expect(screen.getByText('chrissy')).toBeVisible()
      expect(screen.getByText('charlie')).toBeVisible()
      expect(screen.queryByText('agatha')).toBe(null)
    })

    userEvent.clear(search)
    userEvent.type(search, 'crossfit')
    await waitFor(() => {
      expect(screen.getByText('agatha')).toBeVisible()
      expect(screen.queryByText('chrissy')).toBe(null)
    })
  })
})

describe('DataTable Remote component', () => {
  const fetcher = jest.fn().mockResolvedValue({
    results: data.slice(0, 10),
    total: data.length
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', async () => {
    const { container } = render(
      <Wrapper>
        <DataTable.Remote columns={columns} fetcher={fetcher}>
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable.Remote>
      </Wrapper>
    )

    await screen.findByText('chrissy')
    expect(container).toMatchSnapshot()
  })

  it('Calls the fetcher with the first page, passed defaultPageSize, and default sortings', () => {
    const PAGE_SIZE = 7
    const SORT_COLUMN = 'name'
    const SORT_DIRECTION = 'asc'
    render(
      <Wrapper>
        <DataTable.Remote
          columns={columns}
          fetcher={fetcher}
          defaultPageSize={PAGE_SIZE}
          defaultSort={{ column: SORT_COLUMN, direction: SORT_DIRECTION }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable.Remote>
      </Wrapper>
    )

    expect(fetcher).toHaveBeenCalledWith(
      0,
      PAGE_SIZE,
      SORT_COLUMN,
      SORT_DIRECTION
    )
  })

  it('The fetcher is called with the correct page when going to a different page', async () => {
    const PAGE_SIZE = 10
    const SORT_COLUMN = 'name'
    const SORT_DIRECTION = 'asc'
    render(
      <Wrapper>
        <DataTable.Remote
          columns={columns}
          fetcher={fetcher}
          defaultPageSize={PAGE_SIZE}
          defaultSort={{ column: SORT_COLUMN, direction: SORT_DIRECTION }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable.Remote>
      </Wrapper>
    )
    await screen.findByText('chrissy')

    const nextPageButton = screen.getByLabelText('Next page')
    userEvent.click(nextPageButton)
    expect(fetcher).toHaveBeenLastCalledWith(
      1,
      PAGE_SIZE,
      SORT_COLUMN,
      SORT_DIRECTION
    )
  })

  it('The fetcher is called with the correct sortBy and ascending when we click in a column to sort ascending', async () => {
    const PAGE_SIZE = 10
    const SORT_COLUMN = 'name'
    render(
      <Wrapper>
        <DataTable.Remote
          columns={columns}
          fetcher={fetcher}
          defaultPageSize={PAGE_SIZE}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable.Remote>
      </Wrapper>
    )
    await screen.findByText('chrissy')

    const nameHeader = screen.getByText('name')

    userEvent.click(nameHeader)

    expect(fetcher).toHaveBeenLastCalledWith(0, PAGE_SIZE, SORT_COLUMN, 'asc')
  })

  it('The fetcher is called with the correct sortBy and descending when we click in a column and then click again on it', async () => {
    const PAGE_SIZE = 10
    const SORT_COLUMN = 'name'
    render(
      <Wrapper>
        <DataTable.Remote
          columns={columns}
          fetcher={fetcher}
          defaultPageSize={PAGE_SIZE}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable.Remote>
      </Wrapper>
    )
    await screen.findByText('chrissy')

    const nameHeader = screen.getByText('name')

    userEvent.click(nameHeader)
    userEvent.click(nameHeader)

    expect(fetcher).toHaveBeenLastCalledWith(0, PAGE_SIZE, SORT_COLUMN, 'desc')
  })
})
