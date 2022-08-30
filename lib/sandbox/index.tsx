import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { createColumnHelper, flexRender } from '@tanstack/react-table'
import { Box, DataTable, Flex, globalCss, useDataTable, Table } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const ExampleTableImplementation = () => {
  const { getHeaderGroups, getRowModel, setPageIndex, getPageCount } =
    useDataTable<{ name: string; hobby: string }>()

  return (
    <>
      <Table>
        <Table.Header>
          {getHeaderGroups().map((headerGroup) => {
            return (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.HeaderCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            )
          })}
        </Table.Header>
        <Table.Body>
          {getRowModel().rows.map((row) => {
            return (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      <DataTable.Pagination />
    </>
  )
}

interface Person {
  name: string
  hobby: string
}

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

const App = () => {
  const columnHelper = createColumnHelper<Person>()
  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('hobby', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    })
  ]

  return (
    <Flex
      css={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Box css={{ width: '500px' }}>
        <DataTable.Provider columns={columns} data={data} sortable>
          <ExampleTableImplementation />
        </DataTable.Provider>
      </Box>
    </Flex>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
