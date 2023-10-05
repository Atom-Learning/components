import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Tree } from './Tree'

const TreeImplementation = ({
  children
}: {
  children?: React.ReactElement
}) => {
  return (
    <Tree defaultValue="trigger">
      <Tree.Link active>Button</Tree.Link>
      <Tree.Link href="google.com">
        Link
      </Tree.Link>
      {children}
    </Tree>
  )
}

const mockOnOpenChange = jest.fn((_value) => null)

describe('Tree', () => {
  it('renders', async () => {
    const { findByRole } = render(<TreeImplementation />)

    const navigation = await findByRole('navigation')
    await findByRole('link', { name: 'Link' })
    await findByRole('button', { name: 'Button' })

    expect(navigation).toMatchSnapshot()
  })

  it('renders accordion and interacts correctly', async () => {
    const { findByRole, container, getByTestId } = render(
      <TreeImplementation>
        <Tree.Collapsible
          onOpenChange={mockOnOpenChange}
          defaultOpen
        >
          <Tree.CollapsibleTrigger data-testid="accordion-trigger">
            Collapsible Trigger
          </Tree.CollapsibleTrigger>
          <Tree.CollapsibleContent data-testid="accordion-content">
            Collapsible Content
          </Tree.CollapsibleContent>
        </Tree.Collapsible>
      </TreeImplementation>
    )

    expect(container).toMatchSnapshot()

    const accordionTrigger = await findByRole('button', {
      name: 'Collapsible Trigger'
    })
    expect(accordionTrigger).toHaveAttribute('data-state', 'open')
    const accordionContent = getByTestId('accordion-content')
    expect(accordionContent).toBeVisible()

    userEvent.click(accordionTrigger)

    expect(mockOnOpenChange).toBeCalledWith(false)
    expect(accordionTrigger).toHaveAttribute('data-state', 'closed')
    expect(accordionContent).not.toBeVisible()
  })
})
