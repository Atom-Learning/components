import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'
import { createColumnHelper } from '@tanstack/react-table'
import { Box, Flex, globalCss, DataTable, useDataTable, Tooltip } from '../src'

globalCss({ ...reset, '*': { boxSizing: 'border-box' } })()
const columnHelper = createColumnHelper<{
  firstName: string
  lastName: string
}>()
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
      <Box css={{ width: '700px' }}>
        <DataTable
          data={[
            { firstName: 'william', lastName: 'johnson' },
            { firstName: 'patty', lastName: 'fontaine' }
          ]}
          columns={[
            columnHelper.accessor('firstName', {
              cell: (info) => info.getValue()
            }),
            columnHelper.accessor('lastName', {
              cell: (info) => info.getValue()
            })
          ]}
        >
          <ExampleAdapter>
            <DataTable.Table />
            <DataTable.Pagination pageSize={1} />
          </ExampleAdapter>
        </DataTable>
      </Box>
    </Flex>
  </Tooltip.Provider>
)

const ExampleAdapter = ({ children }) => {
  const { getState } = useDataTable()
  const {
    pagination: { pageIndex }
  } = getState()

  console.log('pageIndex:', pageIndex)

  return children
}

ReactDOM.render(<App />, document.getElementById('root'))
