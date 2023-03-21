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
    title: Main
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: gx7H_JrjyRIZ907nCE-Li
nestedSlug:
  - components
  - content
  - table
---
