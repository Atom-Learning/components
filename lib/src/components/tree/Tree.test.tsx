import { render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Tree } from './Tree'

const mockOnOpenChange = jest.fn((_value) => null)

const TreeImplementation = () => {
  return (
    <Tree defaultValue="trigger">
      <Tree.Item>#1</Tree.Item>
      <Tree.Collapsible onOpenChange={mockOnOpenChange}>
        <Tree.CollapsibleTrigger data-testid="collapsible-trigger">
          Trigger With Submenu
        </Tree.CollapsibleTrigger>
        <Tree.CollapsibleContent data-testid="collapsible-content">
          <Tree.Item>Nested: #1</Tree.Item>
          <Tree.Item>Nested: #2</Tree.Item>
          <Tree.Item>Nested: #3</Tree.Item>
          <Tree.Collapsible>
            <Tree.CollapsibleTrigger>Nested</Tree.CollapsibleTrigger>
            <Tree.CollapsibleContent>
              <Tree.Item>Nested: #4</Tree.Item>
              <Tree.Collapsible>
                <Tree.CollapsibleTrigger>Nested Nested</Tree.CollapsibleTrigger>
                <Tree.CollapsibleContent>
                  <Tree.Item>Nested: #5</Tree.Item>
                </Tree.CollapsibleContent>
              </Tree.Collapsible>
            </Tree.CollapsibleContent>
          </Tree.Collapsible>
        </Tree.CollapsibleContent>
      </Tree.Collapsible>
    </Tree>
  )
}

describe('Tree', () => {
  it('renders', async () => {
    const { container } = render(<TreeImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('interacts correctly', async () => {
    const { getByTestId, queryByTestId } = render(<TreeImplementation />)

    const collapsibleTrigger = getByTestId('collapsible-trigger')
    const collapsibleTriggerActionIcon = await within(
      collapsibleTrigger
    ).findByRole('button')
    expect(collapsibleTriggerActionIcon).toHaveAttribute('data-state', 'closed')
    expect(queryByTestId('collapsible-content')).toBeNull()

    userEvent.click(collapsibleTrigger)

    expect(mockOnOpenChange).toBeCalledWith(true)
    expect(collapsibleTriggerActionIcon).toHaveAttribute('data-state', 'open')
    const collapsibleContent = getByTestId('collapsible-content')
    expect(collapsibleContent).toBeVisible()

    userEvent.click(collapsibleTriggerActionIcon)

    expect(mockOnOpenChange).toBeCalledWith(false)
    expect(collapsibleTriggerActionIcon).toHaveAttribute('data-state', 'closed')
    expect(collapsibleContent).not.toBeVisible()
  })
})
