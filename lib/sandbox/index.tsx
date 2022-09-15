import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { createColumnHelper } from '@tanstack/react-table'
import { Box, DataTable, Flex, globalCss, Table } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

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
  const columnHelper = createColumnHelper<{ name: string; hobby: string }>()
  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('hobby', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      cell: (info) => 'something',
      footer: (info) => info.column.id,
      header: 'Actions'
    })
  ]

  console.log(columns[0])

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
        <DataTable.Provider columns={columns} data={data}>
          <Table>
            <DataTable.Header />
            {/* <DataTable.Body /> */}
          </Table>
          <DataTable.Pagination pageSize={5} />
        </DataTable.Provider>
      </Box>
    </Flex>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
