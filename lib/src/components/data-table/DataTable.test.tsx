import { createColumnHelper } from '@tanstack/react-table'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'

import { Button } from '../button'
import { EmptyState } from '../empty-state'
import { Text } from '../text'
import { Tooltip } from '../tooltip'
import { DataTable } from '.'

const columnHelper = createColumnHelper<{
  id: number
  name: string
  hobby: string
}>()

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('name', {
    id: 'name',
    header: 'Name',
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
  { name: 'chrissy', hobby: 'bare-knuckle boxing', id: '1' },
  { name: 'agatha', hobby: 'crossfit', id: '2' },
  { name: 'betty', hobby: 'acting', id: '3' },
  { name: 'denise', hobby: 'bare-knuckle boxing', id: '4' },
  { name: 'charlie', hobby: 'crossfit', id: '5' },
  { name: 'xena', hobby: 'acting', id: '6' },
  { name: 'rick', hobby: 'bare-knuckle boxing', id: '7' },
  { name: 'phillip', hobby: 'crossfit', id: '8' },
  { name: 'maurice', hobby: 'acting', id: '9' },
  { name: 'peter', hobby: 'bare-knuckle boxing', id: '10' },
  { name: 'velma', hobby: 'crossfit', id: '11' },
  { name: 'max', hobby: 'acting', id: '12' },
  { name: 'maxine', hobby: 'bare-knuckle boxing', id: '13' },
  { name: 'siobhan', hobby: 'crossfit', id: '14' },
  { name: 'nelly', hobby: 'acting', id: '15' },
  { name: 'kris', hobby: 'bare-knuckle boxing', id: '16' },
  { name: 'tony', hobby: 'crossfit', id: '17' },
  { name: 'tina', hobby: 'acting', id: '18' }
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
          <DataTable.Pagination />
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
          initialState={{ pagination: { pageIndex: 0, pageSize: 1 } }}
        >
          <DataTable.Table />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    expect(screen.getByText('xena')).toBeVisible()
  })

  it('Sorts data on click of sortable header cell', () => {
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          data={data}
          initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
        >
          <DataTable.Table sortable />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    const nameHeader = screen.getByText('Name')

    userEvent.click(nameHeader) // Sorts ascending
    expect(screen.getByText('agatha')).toBeVisible()
    expect(screen.queryByText('xena')).not.toBeInTheDocument()

    userEvent.click(nameHeader) // Sorts descending
    expect(screen.getByText('xena')).toBeVisible()
    expect(screen.queryByText('agatha')).not.toBeInTheDocument()
  })

  it('Renders drag handles for draggable table rows', () => {
    const { container } = render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.DragAndDropTable />
        </DataTable>
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })
})

describe('DataTable.Pagination component', () => {
  it("doesn't render if table is empty", () => {
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          data={[]}
          initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
        >
          <DataTable.Table sortable />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    const nextPageButton = screen.queryByLabelText('Next page')
    expect(nextPageButton).not.toBeInTheDocument()
  })

  it('Displays the correct page number', async () => {
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          data={data}
          initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
        >
          <DataTable.Table sortable />
          <DataTable.Pagination />
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
        <DataTable
          columns={columns}
          data={data}
          initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
        >
          <DataTable.Table sortable />
          <DataTable.Pagination />
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
        <DataTable
          columns={columns}
          data={data}
          initialState={{ pagination: { pageIndex: 0, pageSize: 10 } }}
        >
          <DataTable.Table sortable />
          <DataTable.Pagination />
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

  it('Sets the page index passed in the initial state', async () => {
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          data={data}
          initialState={{ pagination: { pageIndex: 2, pageSize: 5 } }}
        >
          <DataTable.Table sortable />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    await waitFor(() => expect(screen.getByRole('combobox')).toHaveValue('2'))
  })
})

describe('DataTable GlobalFilter component', () => {
  it("doesn't render if data is empty", () => {
    render(
      <Wrapper>
        <DataTable columns={columns} data={[]}>
          <DataTable.GlobalFilter label="Search" />
          <DataTable.Table sortable />
        </DataTable>
      </Wrapper>
    )

    const searchField = screen.queryByLabelText('Search')
    expect(searchField).not.toBeInTheDocument()
  })

  it('Filters table based on any column', async () => {
    render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.GlobalFilter label="Search" />
          <DataTable.Table sortable />
        </DataTable>
      </Wrapper>
    )

    const search = screen.getByRole('searchbox')

    await waitFor(() => {
      expect(screen.getByText('chrissy')).toBeVisible()
      expect(screen.getByText('charlie')).toBeVisible()
    })

    userEvent.clear(search)
    userEvent.type(search, 'crossfit')
    await waitFor(() => {
      expect(screen.getByText('agatha')).toBeVisible()
      expect(screen.queryByText('chrissy')).toBe(null)
    })
  })
})

describe('DataTable server-side', () => {
  const getAsyncData = jest.fn().mockResolvedValue({
    results: data.slice(0, 10),
    total: data.length
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', async () => {
    const { container } = render(
      <Wrapper>
        <DataTable columns={columns} getAsyncData={getAsyncData}>
          <DataTable.GlobalFilter />
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))
    expect(container).toMatchSnapshot()
  })

  it('The getAsyncData function is called with the first page, passed defaultPageSize, and default sortings', () => {
    const PAGE_SIZE = 7
    const SORT_COLUMN = 'name'
    const SORT_DIRECTION = 'asc'
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          defaultSort={{ column: SORT_COLUMN, direction: SORT_DIRECTION }}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    expect(getAsyncData).toHaveBeenCalledWith({
      pageIndex: 0,
      pageSize: PAGE_SIZE,
      sortBy: SORT_COLUMN,
      sortDirection: SORT_DIRECTION,
      globalFilter: ''
    })
  })

  it('The getAsyncData function is called with the correct page when going to a different page', async () => {
    const PAGE_SIZE = 10
    const SORT_COLUMN = 'name'
    const SORT_DIRECTION = 'asc'
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          defaultSort={{ column: SORT_COLUMN, direction: SORT_DIRECTION }}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))

    const nextPageButton = screen.getByLabelText('Next page')
    userEvent.click(nextPageButton)
    expect(getAsyncData).toHaveBeenLastCalledWith({
      pageIndex: 1,
      pageSize: PAGE_SIZE,
      sortBy: SORT_COLUMN,
      sortDirection: SORT_DIRECTION,
      globalFilter: ''
    })
  })

  it('The getAsyncData function is called with the default pageIndex and pageSize when no initial state is provided', async () => {
    render(
      <Wrapper>
        <DataTable columns={columns} getAsyncData={getAsyncData}>
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))

    expect(getAsyncData).toHaveBeenLastCalledWith({
      pageIndex: 0,
      pageSize: 10,
      sortBy: undefined,
      sortDirection: undefined,
      globalFilter: ''
    })
  })

  it('The getAsyncData function is called with the correct sortBy and ascending when we click in a column to sort ascending', async () => {
    const PAGE_SIZE = 10
    const SORT_COLUMN = 'name'
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))

    const nameHeader = screen.getByText('Name')

    userEvent.click(nameHeader)

    expect(getAsyncData).toHaveBeenLastCalledWith({
      pageIndex: 0,
      pageSize: PAGE_SIZE,
      sortBy: SORT_COLUMN,
      sortDirection: 'asc',
      globalFilter: ''
    })
  })

  it('The getAsyncData function is called with the correct sortBy and descending when we click in a column and then click again on it', async () => {
    const PAGE_SIZE = 10
    const SORT_COLUMN = 'name'
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))

    const nameHeader = screen.getByText('Name')

    userEvent.click(nameHeader)
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))
    userEvent.click(nameHeader)

    expect(getAsyncData).toHaveBeenLastCalledWith({
      pageIndex: 0,
      pageSize: PAGE_SIZE,
      sortBy: SORT_COLUMN,
      sortDirection: 'desc',
      globalFilter: ''
    })
  })

  it('The getAsyncData function is called with the correct global filter when the user globally searches', async () => {
    const PAGE_SIZE = 10
    const GLOBAL_FILTER = 'qwe'
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.GlobalFilter />
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))

    const search = screen.getByRole('searchbox')
    userEvent.type(search, GLOBAL_FILTER)

    await waitFor(() => {
      expect(getAsyncData).toHaveBeenLastCalledWith({
        pageIndex: 0,
        pageSize: PAGE_SIZE,
        sortBy: undefined,
        sortDirection: undefined,
        globalFilter: GLOBAL_FILTER
      })
    })
  })

  it('A loader should appear while fetching the data, and then removed', async () => {
    const PAGE_SIZE = 10
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    expect(screen.queryByText('Loading')).toBeVisible()
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'))
  })

  it('No pagination controls or sorting controls work while loading', async () => {
    const PAGE_SIZE = 10
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    userEvent.click(screen.getByLabelText('Next page'))
    userEvent.click(screen.getByLabelText('Previous page'))
    userEvent.click(screen.getByText('Name'))

    expect(screen.getByRole('combobox')).toBeDisabled()
    expect(getAsyncData).toHaveBeenCalledTimes(1)
  })

  it('Error message component is displayed when it fails to fetch the paginated data', async () => {
    getAsyncData.mockRejectedValue(new Error('Something went wrong'))
    const PAGE_SIZE = 10
    const error = 'Oops something went wrong'
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Error>{() => <Text>{error}</Text>}</DataTable.Error>
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    expect(await screen.findByText(error)).toBeVisible()
  })

  it('Retries fetching the data when clicking retry from the error component', async () => {
    getAsyncData.mockRejectedValue(new Error('Something went wrong'))
    const PAGE_SIZE = 10
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Error>
            {(retry) => (
              <>
                <Text>Oops something went wrong</Text>
                <Button onClick={retry}>Retry fetch</Button>
              </>
            )}
          </DataTable.Error>
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    userEvent.click(await screen.findByText('Retry fetch'))
    expect(getAsyncData).toHaveBeenCalledTimes(2)
    expect(getAsyncData).toHaveBeenLastCalledWith({
      pageIndex: 0,
      pageSize: PAGE_SIZE,
      sortBy: undefined,
      sortDirection: undefined,
      globalFilter: ''
    })
  })

  it('No pagination controls work if fetching the paginated data fails', async () => {
    getAsyncData.mockRejectedValue(new Error('Something went wrong'))
    const PAGE_SIZE = 10
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    userEvent.click(screen.getByLabelText('Next page'))
    userEvent.click(screen.getByLabelText('Previous page'))

    expect(screen.getByRole('combobox')).toBeDisabled()
    expect(getAsyncData).toHaveBeenCalledTimes(1)
  })

  it('Retrys fetching the data with custom fetching options when clicking retry from the error component', async () => {
    getAsyncData.mockRejectedValue(new Error('Something went wrong'))
    const PAGE_INDEX = 2
    const PAGE_SIZE = 8
    const SORT_BY = 'made up column name'
    const SORT_DIRECTION = 'asc'
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          getAsyncData={getAsyncData}
          initialState={{ pagination: { pageIndex: 0, pageSize: PAGE_SIZE } }}
        >
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Error>
            {(retry) => (
              <>
                <Text>Oops something went wrong</Text>
                <Button
                  onClick={() =>
                    retry?.({
                      pageIndex: PAGE_INDEX,
                      pageSize: PAGE_SIZE,
                      sortBy: SORT_BY,
                      sortDirection: SORT_DIRECTION
                    })
                  }
                >
                  Retry fetch
                </Button>
              </>
            )}
          </DataTable.Error>
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )

    userEvent.click(await screen.findByText('Retry fetch'))
    expect(getAsyncData).toHaveBeenCalledTimes(2)
    expect(getAsyncData).toHaveBeenLastCalledWith({
      pageIndex: PAGE_INDEX,
      pageSize: PAGE_SIZE,
      sortBy: SORT_BY,
      sortDirection: SORT_DIRECTION,
      globalFilter: ''
    })
  })
})

describe('DataTable sticky columns', () => {
  it('renders', () => {
    const { container } = render(
      <Wrapper>
        <DataTable columns={columns} data={data}>
          <DataTable.Table numberOfStickyColumns={1} />
        </DataTable>
      </Wrapper>
    )
    expect(container).toMatchSnapshot()
  })
})

describe('DataTable EmptyState', () => {
  it('renders custom empty state', () => {
    const { container } = render(
      <Wrapper>
        <DataTable columns={columns} data={[]}>
          <DataTable.GlobalFilter label="User search" css={{ mb: '$4' }} />
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.EmptyState>
            <EmptyState.Title>No data available</EmptyState.Title>
            <EmptyState.Body>Something is missing</EmptyState.Body>
            <Button>Click here</Button>
          </DataTable.EmptyState>
          <DataTable.Pagination />
        </DataTable>
      </Wrapper>
    )
    expect(container).toMatchSnapshot()
  })
})

describe('DataTable MetaData', () => {
  it('renders row count and sorting', async () => {
    render(
      <Wrapper>
        <DataTable
          columns={columns}
          data={data}
          defaultSort={{ column: 'name', direction: 'asc' }}
        >
          <DataTable.GlobalFilter />
          <DataTable.MetaData />
          <DataTable.Table sortable />
        </DataTable>
      </Wrapper>
    )
    screen.logTestingPlaygroundURL()
    expect(
      screen.getByText('18 items - Sorted by Name ascending')
    ).toBeInTheDocument()

    const search = screen.getByRole('searchbox')
    userEvent.clear(search)
    userEvent.type(search, 'crossfit')
    await waitFor(() => {
      expect(screen.findByText('6 items - Sorted by Name ascending'))
    })

    const hobbyHeader = screen.getByText('hobby')

    userEvent.click(hobbyHeader)
    await waitFor(() => {
      expect(screen.findByText('6 items - Sorted by hobby ascending'))
    })
  })
})
