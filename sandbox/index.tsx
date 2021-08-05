import * as React from 'react'
import * as ReactDOM from 'react-dom'

// import { reset } from 'stitches-reset'
import { Box, globalCss, Table } from '../src'

// globalCss(reset)()

const App = () => {
  return (
    <Table css={{ width: '500px', mb: '100px' }}>
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
    </Table>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
