import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Table } from './Table'

describe(`Table component`, () => {
  it('renders', async () => {
    const { container } = await render(
      <Table css={{ height: '100px', width: '400px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Column A</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>This is text</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Footer 1</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with size set to lg', async () => {
    const { container } = await render(
      <Table size="lg" css={{ height: '100px', width: '400px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Column A</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>This is text</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Footer 1</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with square corners', async () => {
    const { container } = await render(
      <Table corners="square" css={{ height: '100px', width: '400px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Column A</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>This is text</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Footer 1</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with a themed header', async () => {
    const { container } = await render(
      <Table css={{ height: '100px', width: '400px' }}>
        <Table.Header theme="primary">
          <Table.Row>
            <Table.HeaderCell>Column A</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>This is text</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Footer 1</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Column A</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>This is text</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Footer 1</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
