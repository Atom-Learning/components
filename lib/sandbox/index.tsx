import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { createColumnHelper } from '@tanstack/react-table'
import { Box, Flex, globalCss, DataTable } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

const columnHelper = createColumnHelper<{
  name: string
  hobby: string
}>()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: 'Name'
  }),
  columnHelper.accessor('hobby', {
    cell: (info) => info.getValue(),
    header: 'Hobby'
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

const App = () => (
  <Flex
    css={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <Box css={{ width: '700px', height: '900px' }}>
      <DataTable
        columns={columns}
        data={data}
        defaultSort={{ column: 'name', direction: 'asc' }}
      >
        <DataTable.Search
          css={{ mb: '$4', maxWidth: '300px' }}
          label="User search"
          placeholder="Search for a user"
          hideLabel
        />
        <DataTable.Table css={{ mb: '$4' }} theme="light" striped />
        <DataTable.Pagination pageSize={5} />
      </DataTable>
    </Box>
  </Flex>
)

ReactDOM.render(<App />, document.getElementById('root'))
