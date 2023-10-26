---
slug: data-table
title: Data Table
links:
  viewSource: components/data-table
  showReportAnIssue: true
tabs:
  - title: Code
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


      #### Row selection and bulk actions


      The component supports multiple-row selection. To activate the feature, \`enableRowSelection\` needs to be passed into the \`DataTable\` provider. This will activate an extra column containing checkboxes, one for each row, and a main one that toggles all-row selection.


      In addition to this, you will also need to build the \`BulkActions\` bar, which will be composed by using 2 subcomponents, which represent the 2 possible states that relate to row selection:\


      * The \`DefaultActions\` component will be rendered when no rows are currently being selected

      * The \`SelectedRowActions\` component will be rendered when at least one row is currently selected.


      The difference between the 2 is the fact that the \`SelectedRowActions\` component contains a default \`Cancel\` button which simply deselects everything and returns the table to the "default" state.


      Both components can take custom elements, like buttons or links, with custom actions. This allows us to do whatever we want to with the currently selected data. For instance, the \`DefaultActions\` component could contain a button that adds extra rows to the table. The \`SelectedRowActions\` component could, instead, contain a button that deletes the selected rows.


      Here's what it would all look like when put together:


      <CodeBlock live={false} preview={false} code={`const columnHelper = createColumnHelper<{
        firstName: string
        lastName: string
        age: string
      }>()


      const columns = [
        columnHelper.accessor('firstName', {
          header: 'First name',
          id: 'firstName',
          cell: (data) => data.getValue()
        }),
        columnHelper.accessor('lastName', {
          header: 'Last name',
          id: 'lastName',
          cell: (data) => data.getValue()
        }),
        columnHelper.accessor('age', {
          header: 'Age',
          id: 'age',
          cell: (data) => data.getValue()
        })
      ]


      const data = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 34
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          age: 33
        },
        {
          firstName: 'Tina',
          lastName: 'Doe',
          age: 2
        }
      ]


      const TableHead = () => {
        const { rowSelection, setData } = useDataTable()

        const handleIncreaseAge = () => {
          const selectedRows = Object.keys(rowSelection)

          const updatedData = data.results.map((row, index) => {
            if (selectedRows.includes(index.toString())) {
              row.age += 10
            }
            return row
          })

          setData((current) => ({
            ...current,
            results: updatedData
          }))
        }
        
        return (
          <DataTable.BulkActions>
            <DataTable.BulkActions.DefaultActions>
              <Button onClick={() => console.log('clicked')}>Add row</Button>
            </DataTable.BulkActions.DefaultActions>
            <DataTable.BulkActions.SelectedRowActions>
              <Button onClick={handleIncreaseAge}>Make older</Button>
            </DataTable.BulkActions.SelectedRowActions>
          </DataTable.BulkActions>
        )
      }
        








        
      <DataTable columns={columns} data={data} enableRowSelection>
        <TableHead />
        <DataTable.Table />
      </DataTable>`} language={"jsx"} />


      #### Scrolling behaviour


      You might need to display your table on smaller devices. Or you may have a lot of data loaded at once in your table. Or you might have a large table that you wish to display on smaller screens. 


      In either case, one possible solution would be to add scrolling behaviour. Horizontally or vertically. Or both.


      You can pass `scrollOptions` as a prop to enable either. `scrollOptions` is an object which can have a number of key-value pairs, as follows:


      <CodeBlock live={false} preview={false} code={`{
        hasStickyHeader: true,
        headerCss: {
          top: '100px',
          zIndex: 12  
        },
        numberOfStickyColumns: 2,
        scrollContainerCss: {
          height: '250px'
        }
      }`} language={"javascript"} />


      #### hasStickyHeader


      If you want your table to have a sticky header row (one that 'sticks' to the top of the viewport as you scroll down - very useful for tables with many rows and columns), you can add `hasStickyHeader: true` to the `scrollOptions` object. 


      #### headerCss


      `hasStickyHeader` should be enough for simple use cases, but if you maybe have another sticky element above the table, and will need some sort of offset on your table's header, there's also  `headerCss` which you can use. Add this and feel free to customise the header's CSS. 


      #### numberOfStickyColumns


      If your table has many columns and you wish to make sure it displays nicely on smaller screens, one option would be to have some columns which 'stick' to the left side of the table and have the rest scroll horizontally. Keep in mind that if you are also using `enableRowSelection`, your table will have an extra column, containing the selection checkbox. So if you wish for your first data column to stick, you will need to pass `numberOfStickyColumns: 2`.


      #### scrollContainerCss


      Sometimes you might have a table with many columns and rows, and you might also wish to have it display nicely on smaller devices. In this case, you will perhaps think about adding both `hasStickyHeader` and `numberOfStickyColumns`. The problem is that when `numberOfStickyColumns` is passed along side `hasStickyHeader`, the 'stickyness' of the header is lost. We're going to need to add a fixed height to our table, which will now be wrapped in a scrollbox. Use `scrollContainerCss` for this.


      Keep in mind that this will add a vertical scrollbar to the table.


      Here's how your DataTable component might look like:


      <CodeBlock live={false} preview={false} code={`<DataTable columns={columns} data={data}>
        <DataTable.Table 
          scrollOptions={{
            hasStickyHeader: true,
            headerCss: {
              top: '100px',
              zIndex: 10
            },
            numberOfStickyColumns: 2,
            scrollContainerCss: {
              height: '250px'
            }  
          }}
        />
      </DataTable>

      `} language={"jsx"} />


      #### Subrows and row expansion


      You may wish to render your data as nested rows. Maybe you have a list of classes and students, and wish to render each student nested under their respective class. To achieve this, all you need to do is structure your data so that the nested rows are added as an array under the \`subRows\` property of the \`data\` object that is then passed into the table provider.


      Structuring the data this way will enable \`Chevron\` icons next to the first column. These are clickable and upon clicking them, they rotate 90 degrees, indicating whether or not the row is expanded. You can have many nesting levels.


      <CodeBlock live={false} preview={false} code={`const columnHelper = createColumnHelper()


      const columns = [
        columnHelper.accessor('name', {
          header: 'Name',
          id: 'name',
          cell: (data) => data.getValue() || ''
        }),
        columnHelper.accessor('age', {
          header: 'Age',
          id: 'age',
          cell: (data) => data.getValue() || ''
        })
      ]


      const data = [
        {
          name: 'John',
          age: 30,
          subRows: [
            {
              name: 'Jim',
              age: 12
            },
            {
              name: 'Jane',
              age: 5
            }
          ]
      ]
          
      <DataTable data={data} columns={columns} enableRowSelection>
        <DataTable.Table />
      </DataTable>`} language={"jsx"} />


      ## API Reference


      <ComponentProps component="DataTable" />


      <ComponentProps component="DataTable.Table" />


      <ComponentProps component="DataTable.Head" />


      <ComponentProps component="DataTable.HeaderCell" />


      <ComponentProps component="DataTable.MetaData" />


      <ComponentProps component="DataTable.BulkActions" />


      <ComponentProps component="DataTable.Body" />


      <ComponentProps component="DataTable.Row" />


      <ComponentProps component="DataTable.DataCell" />


      <ComponentProps component="DataTable.GlobalFilter" />


      <ComponentProps component="DataTable.Loading" />


      <ComponentProps component="DataTable.Error" />


      Test
  - title: Usage
    content: >-
      ## Overview


      A data table is a graphical **representation of data in a tabular format** that is typically used to display large amounts of information in a condensed and organised manner.


      When designing data table with users in mind, it's important to follow some key factors:


      * **Scannability** - users should be able to quickly and easily scan the data table to find the information they are looking for. This can be accomplished by using clear and concise headings and labels, as well as alternating row colours or bold text to differentiate between rows.

      * **Interactive** - data table components should be interactive and allow users to sort, filter, and search the data to find the information they need.

      * **Contextual Information** - users may need additional context to fully understand the data presented in the table. This can be accomplished by providing explanatory text or tooltips that provide additional information about the data being displayed.

      * **Responsive** - data table components should be designed to work on a variety of devices and screen sizes.


      ![Data table overview](/assets/images/table-01-overview.svg "Data table overview")


      ## When to use


      Data tables are often used in applications that require users to sort, filter, search or view large data sets, such as financial applications, data analysis tools, and content management systems.\

      \

      Data tables are a great way to present and organise data in a way that allows users to scan and look for patterns, as well as develop insights from the actual data. \

      Use data table component when you need to manipulate or view large amounts of data in a tabular format.


      ![Large amount of data in a table](/assets/images/table-02-large-amount-of-data.svg "Large amount of data in a table")


      ### Sorting


      ![Sorting by default, with a possibility to sort each column](/assets/images/table-03-sorting.svg "Sorting by default, with a possibility to sort each column")


      Sorting by default, with a possibility to sort each column


      ### Meta data


      ![Meta data showing number of items and sorting](/assets/images/metadata-1-.png "Meta data showing number of items and sorting")


      ### Bulk actions


      ![Multiple row selection + bulk actions](/assets/images/table-04-bulk-actions.svg "Multiple row selection + bulk actions")


      Multiple row selection + bulk actions


      Bulk actions in a table refer to performing a single action on multiple items simultaneously, rather than individually performing the action on each item separately. It allows users to efficiently manage and manipulate large sets of data within a table or list.\

      \

      Bulk actions can be used to modify, update, or delete multiple data entries at once. For example, in Atom Prime, this feature may allow the teacher to delete multiple old homework instead of deleting them individually.\

      \

      To utilize bulk actions users can select multiple items by checking the checkboxes and then trigger the desired action from a toolbar that appears temporarily above the table while items are selected.


      ### Empty states


      ![data table empty states](/assets/images/table-05-empty-states.svg "data table empty states")


      ### Horizontal scrolling


      ![Table horizontal scroll](/assets/images/table-06-horizontal-scroll.svg "Table horizontal scroll")


      ### Overflow menu


      ![table overflow menu](/assets/images/table-07-overflow-menu.svg "table overflow menu")


      ### Filtering


      ![table filtering](/assets/images/table-09-filtering.svg "table filtering")


      Filtering allows users to drill down on data and extract insights more efficiently. Users can filter by entering specific text in the search bar or selecting already defined keywords. For example, in Atom Prime, in Manage Student Table, the teacher can reduce the amount of data by filtering by class and get the desired results faster.


      ### Pagination


      ![table pagination](/assets/images/table-10-pagination.svg "table pagination")


      ## Do's and Don'ts


      <DosAndDonts items={[{"type":"do","description":"always provide clear labels for table’s headings and content.","image":"/assets/images/table-11-dos-and-donts.svg"},{"image":"/assets/images/table-12-dos-and-donts.svg","description":"provide inappropriate labels, that don’t reflect the content.","type":"dont"},{"type":"do","image":"/assets/images/table-13-dos-and-donts.svg","description":"align content top-left in each row’s cell (except for numeric values)."},{"image":"/assets/images/table-14-dos-and-donts.svg","type":"dont","description":"use different alignments inside a row cell."},{"image":"/assets/images/table-15-dos-and-donts.svg","type":"do","description":"prioritise the columns and sort the most important information starting from left to right."},{"type":"avoid","description":"placing columns in random order.","image":"/assets/images/table-16-dos-and-donts.svg"},{"type":"do","description":"use the same row size.","image":"/assets/images/table-17-dos-and-donts.svg"},{"type":"dont","description":"mix the row sizes.","image":"/assets/images/table-18-dos-and-donts.svg"},{"type":"do","description":"use the same format of dates everywhere.","image":"/assets/images/table-19-dos-and-donts.svg"},{"type":"do","description":"mix format of dates.","image":"/assets/images/table-20-dos-and-donts.svg"},{"type":"do","description":"use responsive pagination on smaller breakpoints.","image":"/assets/images/table-21-dos-and-donts.svg"},{"type":"do","description":"use the first fixed column for complex tables that require horizontal scrolling.","image":"/assets/images/table-22-dos-and-donts.svg"}]} />
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: cagh7LpcbxiyLCvvU3T8m
nestedSlug:
  - components
  - content
  - data-table
---
