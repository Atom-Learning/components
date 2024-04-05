import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { CheckboxTree } from '.'

const CheckboxTreeImplementation = (props) => {
  return (
    <CheckboxTree {...props}>
      <CheckboxTree.Item value="top level">Top level</CheckboxTree.Item>
      <CheckboxTree.Collapsible>
        <CheckboxTree.CollapsibleTrigger
          title="top level all item"
          label="Open: Top level trigger"
        >
          Trigger With Submenu
        </CheckboxTree.CollapsibleTrigger>
        <CheckboxTree.CollapsibleContent>
          <CheckboxTree.Item value={1}>1</CheckboxTree.Item>
          <CheckboxTree.Item value={2}>2</CheckboxTree.Item>
          <CheckboxTree.Collapsible>
            <CheckboxTree.CollapsibleTrigger
              label="Open: Second level trigger"
              title="all but nested a"
            >
              All but nested
            </CheckboxTree.CollapsibleTrigger>
            <CheckboxTree.CollapsibleContent>
              <CheckboxTree.Item value="1 nested">Nested: #1</CheckboxTree.Item>
              <CheckboxTree.Item value="2 nested">Nested: #2</CheckboxTree.Item>
            </CheckboxTree.CollapsibleContent>
          </CheckboxTree.Collapsible>
        </CheckboxTree.CollapsibleContent>
      </CheckboxTree.Collapsible>
    </CheckboxTree>
  )
}

const mockOnCheckedChange = jest.fn()

describe(`CheckboxTree component`, () => {
  it('renders a checkbox', async () => {
    const { container } = render(<CheckboxTreeImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<CheckboxTreeImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('respects defaultChecked', async () => {
    render(<CheckboxTreeImplementation defaultChecked={[1, '2 nested']} />)
    const checkboxItem1 = screen.getByTitle('1')
    expect(checkboxItem1).toBeChecked()

    const checkboxItem2 = screen.getByTitle('2')
    expect(checkboxItem2).not.toBeChecked()

    const checkboxItem2Nested = screen.getByTitle('2 nested')
    expect(checkboxItem2Nested).toBeChecked()
  })

  it('respects checked', async () => {
    render(<CheckboxTreeImplementation checked={[2, '1 nested']} />)
    const checkboxItem1 = screen.getByTitle('1')
    expect(checkboxItem1).not.toBeChecked()

    const checkboxItem2 = screen.getByTitle('2')
    expect(checkboxItem2).toBeChecked()

    const checkboxItem1Nested = screen.getByTitle('1 nested')
    expect(checkboxItem1Nested).toBeChecked()
  })

  it('calls onCheckedChange correctly when used uncontrolled', async () => {
    render(
      <CheckboxTreeImplementation
        defaultChecked={[1, '2 nested']}
        onCheckedChange={mockOnCheckedChange}
      />
    )
    screen.getByTitle(1).click()

    expect(mockOnCheckedChange).toHaveBeenCalledWith(['2 nested'])
  })

  it('calls onCheckedChange correctly when used controlled', async () => {
    render(
      <CheckboxTreeImplementation
        checked={[2, '1 nested']}
        onCheckedChange={mockOnCheckedChange}
      />
    )
    screen.getByTitle('1').click()

    expect(mockOnCheckedChange).toHaveBeenCalledWith([2, '1 nested', 1])
  })
})
