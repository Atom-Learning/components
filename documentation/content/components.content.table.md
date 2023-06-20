---
slug: table
title: Table
links:
  viewSource: components/table
  showReportAnIssue: true
tabs:
  - content: >-
      The `Table` component displays a collection of data grouped into rows.
      Its structure mirrors that of a regular HTML table, with the
      smaller `Table.Body`, `Table.Cell`, `Table.Footer`, `Table.Header`, `Table.HeaderCell` and `Table
      Row` components corresponding to
      the `<tbody>`, `<td>`, `<tfoot>`, `<thead>`, `<th>` and `<tr>` tags,
      respectively.


      <CodeBlock live={true} preview={true} code={`<Table css={{ width: '500px', mb: '100px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Rakim</Table.Cell>
            <Table.Cell>Jackson</Table.Cell>
            <Table.Cell>35</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Evelyn</Table.Cell>
            <Table.Cell>Smith</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Miguel</Table.Cell>
            <Table.Cell>Fernandez</Table.Cell>
            <Table.Cell>52</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.FooterCell>Footer 1</Table.FooterCell>
            <Table.FooterCell>Footer 2</Table.FooterCell>
            <Table.FooterCell>Footer 3</Table.FooterCell>
          </Table.Row>
        </Table.Footer>
      </Table>`} language={"tsx"} />


      ## Styling


      The default table width is 100% of the parent container, but this and other styles can be overridden with the `css` prop on all components.


      Best practice: Due to rendering issues with some browsers, adding borders to `Table.Row` is possible by styling the Table component with `border-collapse: collapse`; however, this practice is generally not recommended. The preferred method for adding borders is applying styles to the `Table.Cell` and `Table.HeaderCell` components.


      <CodeBlock live={true} preview={true} code={`<Table css={{ width: '500px', mt: '100px', ml: '100px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell css={{ bg: '$subjectEnglish' }}>
              First Name
            </Table.HeaderCell>
            <Table.HeaderCell css={{ bg: '$subjectEnglish' }}>
              Last Name
            </Table.HeaderCell>
            <Table.HeaderCell css={{ bg: '$subjectEnglish' }}>Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Rakim</Table.Cell>
            <Table.Cell>Jackson</Table.Cell>
            <Table.Cell>35</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Evelyn</Table.Cell>
            <Table.Cell>Smith</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Miguel</Table.Cell>
            <Table.Cell>Fernandez</Table.Cell>
            <Table.Cell>52</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.FooterCell css={{ fontStyle: 'italic', color: '$subjectEnglish' }}>
              Footer 1
            </Table.FooterCell>
            <Table.FooterCell css={{ fontStyle: 'italic', color: '$subjectEnglish' }}>
              Footer 2
            </Table.FooterCell>
            <Table.FooterCell css={{ fontStyle: 'italic', color: '$subjectEnglish' }}>
              Footer 3
            </Table.FooterCell>
          </Table.Row>
        </Table.Footer>
      </Table>`} language={"tsx"} />


      ## Variants


      The `Table` component has 3 size variants that control the row height and cells padding. The three available sizes are `md`(default), `lg` and `xl`.


      <CodeBlock live={true} preview={true} code={`<>
        <Table size="lg" css={{ width: '500px', mt: '100px', ml: '100px' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Rakim</Table.Cell>
              <Table.Cell>Jackson</Table.Cell>
              <Table.Cell>35</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Evelyn</Table.Cell>
              <Table.Cell>Smith</Table.Cell>
              <Table.Cell>27</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table size="xl" css={{ width: '500px', mt: '100px', ml: '100px' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Rakim</Table.Cell>
              <Table.Cell>Jackson</Table.Cell>
              <Table.Cell>35</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Evelyn</Table.Cell>
              <Table.Cell>Smith</Table.Cell>
              <Table.Cell>27</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>`} language={"tsx"} />


      The `Table` component by default renders with a slight border radius. If you want to remove this, for example if you are rendering the `Table` inside another component that has border radius, you can remove this by setting `corners="square"`. The default is `corners="round"`.


      ```

      <Table corners="square">...</Table>

      ```


      `Table.Header` accepts a theme prop, the current available options are `primary`, `primaryDark`, and `light`. The default is `primaryDark`.


      ```

      <Table>
        <Table.Header theme="light">...</Table.Header>
      </Table>

      ```


      `Table.Body` accepts an appearance prop, which determines whether the rows will be alternate coloured or not. The current options are `striped` and `simple`, and the default is `striped`.


      ```

      <Table>
        <Table.Body appearance="simple">...</Table.Body>
      </Table>

      ```


      ## API Reference


      <ComponentProps component="Table" />


      <ComponentProps component="Table.Body" />


      <ComponentProps component="Table.Cell" />


      <ComponentProps component="Table.Footer" />


      <ComponentProps component="Table.FooterCell" />


      <ComponentProps component="Table.Header" />


      <ComponentProps component="Table.HeaderCell" />


      <ComponentProps component="Table.Row" />
    title: Code
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

      Data tables are a great way to present and organise data in a way that allows users to scan and look for patterns, as well as develop insights from the actual data.\

      Use data table component when you need to manipulate or view large amounts of data in a tabular format.


      ![Large amount of data in a table](/assets/images/table-02-large-amount-of-data.svg "Large amount of data in a table")


      ### Sorting


      ![Sorting by default, with a possibility to sort each column](/assets/images/table-03-sorting.svg "Sorting by default, with a possibility to sort each column")


      Sorting by default, with a possibility to sort each column


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
uuid: gx7H_JrjyRIZ907nCE-Li
nestedSlug:
  - components
  - content
  - table
---
