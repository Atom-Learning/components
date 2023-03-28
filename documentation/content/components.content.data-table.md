---
slug: data-table
title: Data Table
links:
  viewSource: components/data-table
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      `DataTable` provides complex features for tables, like sorting and
      pagination. 


      It's built around the `@tanstack/react-table` library and exposes the `table` state from that library directly. All util functions from the library are also compatible with `DataTable`. It's worth a good read of [`@tanstack/react-table`'s documentation](https://tanstack.com/table/v8/docs/guide/introduction) too, since we won't be repeating much of it here.


      `DataTable` and its subcomponents are designed to be very simple to use. This is achieved by abstracting complex and/or boilerplate logic away from the consumer. For example, `DataTable.Pagination` can be dropped inside a `DataTable` to paginate the table's data without the need to add any configuration on `DataTable` itself. This is achieved by having `DataTable.Pagination` itself use the `applyPagination` and `setPageSize` methods exposed by `useDataTable` on its first render. This pattern should be replicated wherever practical to maintain the best developer experience possible.


      ## Anatomy


      The root `DataTable` component manages the table's state and exposes it via the React Context API. This state can be accessed by any child components by calling `useDataTable`.


      Other `DataTable` components call `useDataTable` and provide useful default implementations for common patterns. For example, `DataTable.Head` will render a header for every column defined in the parent `DataTable`. `DataTable.Body` will render a row for every data item. `DataTable.Table` combines both `DataTable.Head` and `DataTable.Body`.


      ### Using defaults vs using rolling your own


      Here's a simple config for some table data and columns.


      <CodeBlock live={false} preview={false} code={`// import { createColumnHelper } from '@tanstack/react-table'


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
        { name: 'chrissy', hobby: 'bare-knuckle boxing' },
        { name: 'agatha', hobby: 'crossfit' },
        { name: 'betty', hobby: 'acting' }
      ]`} language={"tsx"} />


      There are basically two ways to use `DataTable` to build a table from this config. The first uses the highest-level components that are bundled into `DataTable` to provide useful default behaviours with minimal code. The second directly accesses the state from `DataTable` and combines it with the `Table` UI components to achieve the same thing. This demonstrates how you could create more custom table UIs without the need to extend the high-level components.


      #### With Defaults


      The following two examples are exactly equivalent in their output. The second example is included to demonstrate what `DataTable`'s subcomponents do: they bundle up UI components and logic to provide useful defaults. They exist at various levels of abstraction, e.g. `DataTable.Table` renders `DataTable.Body`, which renders `DataTable.Row`. This means that you can use whichever component provides useful functionality for your use case while still being low-level enough to let you combine it with your own custom logic.


      <CodeBlock live={false} preview={false} code={`<DataTable columns={columns} data={data}>
        <DataTable.Table sortable css={{mb: '$4'}}/>
        <DataTable.Pagination pageSize={5} />
      </DataTable>


      <DataTable columns={columns} data={data}>
        <Table>
          <DataTable.Head sortable />
          <DataTable.Body />
        </Table>
        <DataTable.Pagination pageSize={5} />
      </DataTable>`} language={"tsx"} />


      #### Rolling your own


      If you need more flexibility than the default implementations provide, you can roll your own. Note that you can mix and match default implementations with your own. For example you could write your own table head implementation but use `DataTable.Body` for the body.


      Note also that `useDataTable` can only be called by a child component of `DataTable`. In a real example, you'll probably have a separate named component which makes the `useDataTable` call, because if you're not using the defaults as above then you probably have some complex logic involved. In this example we've got an inline child component for simplicity.


      <CodeBlock live={false} preview={false} code={`<DataTable columns={columns} data={data}>
        {() => {
          const { getHeaderGroups, getRowModel, setGlobalFilter, getState } =
            useDataTable()
          const { globalFilter } = getState()

          return (
            <>
              <Label htmlFor="search">User search</Label>
              <SearchInput
                name="search"
                value={globalFilter}
                onChange={setGlobalFilter}
              />
              <Table>
                <Table.Header>
                  {getHeaderGroups().map((headerGroup) => (
                    <Table.Row key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        const sort = header.column.getIsSorted()
                        return (
                          <Table.HeaderCell
                            onClick={header.column.getToggleSortingHandler()}
                            {...props}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {sort && { asc: '^', desc: 'v' }[sort as string]}
                          </Table.HeaderCell>
                        )
                      })}
                    </Table.Row>
                  ))}
                </Table.Header>
                <Table.Body>
                  {getRowModel().rows.map((row) => (
                    <Table.Row>
                      {row.getVisibleCells().map((cell) => (
                        <Table.Cell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </>
            // Then you could build your own pagination here too I guess? If you really wanted to?
          )
        }}
      </DataTable>`} language={"tsx"} />


      ### Server-side pagination and sorting


      `DataTable` can be used with local pagination or server-side pagination (getting only the data needed for the current page). To use one or the other, you have to use the `data` or `getAsyncData` prop respectively.

      The `getAsyncData` function accepts an object with the necessary parameters to get the relevant piece of data for the current page and order. All the parameters are optional, with these defaults:


      <CodeBlock live={false} preview={false} code={`{
        pageIndex: 0,
        pageSize: 10,
        sortBy: undefined,
        sortDirection: undefined,
        globalFilter: ''
      }`} language={"ts"} />


      The response from the `getAsyncData` function must match the following schema:


      <CodeBlock live={false} preview={false} code={`{
        results: Array<Record<string, unknown>> // your current page data, sorted if specified
        total: number // the total number of elements in your data
      }`} language={"ts"} />


      A loading state using `<DataTable.Loading>` is automatically included in `DataTable` which is visible while the `getAsyncData` promise is pending.

      You can use `DataTable.Error` to display your own error component when the `getAsyncData` function promise rejects. Notice: `DataTable.Error` doesn't render anything on its own, but whatever is passed as children.


      <CodeBlock live={false} preview={false} code={`<DataTable
        columns={columns}
        defaultPageSize={10}
        defaultSort={{ column: 'name', direction: 'asc' }}
        initialState={{ pagination: { pageIndex: 0, pageSize: 10 } }}
        getAsyncData={async ({
          pageIndex,
          pageSize,
          sortBy,
          sortDirection,
          globalFilter
        }) => {
          const params = new URLSearchParams({
            page: pageIndex,
            pageSize,
            order: sortBy,
            dir: sortDirection,
            search: globalFilter
          })
          const response = await fetch(\`https://your-api?$\{params.toString()}\`)
          const { results, total } = await response.json()

          return { results, total }
        }}
      >
        <DataTable.Table sortable css={{ mb: '$4', minWidth: '500px' }} />
        <DataTable.Error>
          {(retry) => <Button onClick={retry}>Try again</Button>}
        </DataTable.Error>
        <DataTable.Pagination />
      </DataTable>`} language={"tsx"} />


      `DataTable.Error`provides a`retry`function to the children, which allows you to recall the`getAsyncData`function. The`retry`function can be called with all the paginated parameters as an optional object. If no parameters are provided,`retry`will be called with the last paginated options.


      <CodeBlock live={false} preview={false} code={` <DataTable.Error>
        {(retry) => (
          <Button
            onClick={() =>
              retry?.({
                pageIndex: 5,
                pageSize: 10,
                sortBy: 'name',
                sortDirection: 'asc',
                globalFilter: ''
              })
            }
          >
            Retry
          </Button>
        )}
      </DataTable.Error> `} language={"tsx"} />


      ## Features


      ### Search


      `DataTable.GlobalFilter` renders a search input that filters the whole table by matching the input against values from any table column.


      ##### Note:


      If a column is rendering a value that isn't directly accessible on the data (i.e.: nested in an object `{name: {first: 'a'}}` the value needs to be converted to a string in the accessor. For example:


      <CodeBlock live={false} preview={false} code={` columnHelper.accessor((row) => String(row.first), {
              header: 'first',
              id: 'firstname',
              cell: (row) => (row.getValue())
            }),`} language={"undefined"} />

      ### Sorting


      A `DataTable`'s data can be sorted by default and can also be sortable by the user. These two options are independent of each other.


      #### Default sorting


      `DataTable` takes an optional `defaultSort` prop to configure the column and direction for the table's default sorting, e.g. `{column: 'name', direction: 'asc'}`


      #### User sorting


      If `DataTable`'s `isSortable` state is `true`, then `DataTable.Header` will be clickable to toggle between ascending, descending and no sorting in any sortable columns. `DataTable.Head` and `DataTable.Table` take an optional boolean `sortable` prop to configure this option.


      ### Pagination


      `DataTable.Pagination` can be passed as a child to `DataTable` to render the pagination UI and configure the parent `DataTable` to paginate its data.


      ### Drag and drop


      The `DataTable.DragAndDropTable` can be rendered in place of `DataTable.Table` to allow users to reorder table rows via drag and drop. It takes an optional `onDragAndDrop` prop which is a function that fires when rows have been re-ordered via drag-and-drop. Use this to sync those changes with external data sources.

      Note that column sorting conflicts with drag and drop behaviour. In any context where you allow drag-and-drop reordering, you probably want to disable column sorting (see User Sorting above). Similarly, you should probably disable pagination because users won't be able to drag rows across page boundaries.


      #### Row IDs


      Drag-and-drop functionality relies on each table row having a unique ID. `DataTable.DragAndDropContainer` will throw an error if you don't provide unique IDs for each row in the `data` provided to `DataTable`, so you should consider wrapping your table in an `ErrorBoundary` to reduce the impact on your user if there is a problem with your data. By default, `DataTable.DragAndDropContainer` will look for this id in an `id` property on each object in `data`. You can use the `idColumn` prop to provide the name of a different property, e.g. `userId`, that already exists on your data, so you don't have to generate new IDs just for the table. For example, you could provide data like this with no additional configuration:


      <CodeBlock live={false} preview={false} code={`const data = [
        { name: 'chrissy', hobby: 'bare-knuckle boxing', id: 1 },
        { name: 'agatha', hobby: 'crossfit', id: 2 },
        { name: 'betty', hobby: 'acting', id: 3 }
      ]

      <DataTable data={data} columns={columns}>
        <DataTable.DragAndDropTable onDragAndDrop={(oldIndex, newIndex, newData) => console.log(oldIndex, newIndex, newData)}/>
      </DataTable>`} language={"tsx"} />


      Or you could provide this data and specify the id column accordingly:


      <CodeBlock live={false} preview={false} code={`const data = [
        { name: 'chrissy', hobby: 'bare-knuckle boxing', userId: 1 },
        { name: 'agatha', hobby: 'crossfit', userId: 2 },
        { name: 'betty', hobby: 'acting', userId: 3 }
      ]

      <DataTable data={data} columns={columns}>
        <DataTable.DragAndDropTable idColumn="userId" onDragAndDrop={(oldIndex, newIndex, newData) => console.log(oldIndex, newIndex, newData)} />
      </DataTable>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="DataTable" />


      <ComponentProps component="DataTable.Table" />


      <ComponentProps component="DataTable.Head" />


      <ComponentProps component="DataTable.HeaderCell" />


      <ComponentProps component="DataTable.Body" />


      <ComponentProps component="DataTable.Row" />


      <ComponentProps component="DataTable.DataCell" />


      <ComponentProps component="DataTable.GlobalFilter" />


      <ComponentProps component="DataTable.Loading" />


      <ComponentProps component="DataTable.Error" />


      Test
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: cagh7LpcbxiyLCvvU3T8m
nestedSlug:
  - components
  - content
  - data-table
---
