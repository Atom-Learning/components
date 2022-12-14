import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { createColumnHelper } from '@tanstack/react-table'
import { Box, DataTable, Flex, globalCss, Tooltip } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()

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
  // Columns created with columnHelper.display won't be sortable.
  // They need a header to be set manually since they're not just reading
  // a property from the row.
  columnHelper.display({
    cell: (info) => <button>do something</button>,
    header: 'Actions'
  })
]

const data = [
  { name: 'agatha', hobby: 'crossfit' },
  { name: 'betty', hobby: 'acting' },
  { name: 'chrissy', hobby: 'bare-knuckle boxing' }
]

const App = () => (
  <Tooltip.Provider>
    <Flex
      css={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Box css={{ height: '300px', width: '700px' }}>
        <DataTable
          columns={columns}
          data={data}
          // dragAndDrop={{
          //   active: true,
          //   onChange: (oldIndex, newIndex, newData) => {
          //     console.log('old index:', oldIndex)
          //     console.log('new index:', newIndex)
          //     console.log('newData:', newData)
          //   }
          // }}
          // dragAndDrop
        >
          {/* <DataTable.GlobalFilter /> */}
          <DataTable.Table sortable css={{ mb: '$4' }} />
          <DataTable.Pagination pageSize={5} />
        </DataTable>
      </Box>
    </Flex>
  </Tooltip.Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
