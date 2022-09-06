import { fireEvent, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { DismissibleGroup } from '.'

const mockOnDismiss = jest.fn((value) => null)

const DismissibleGroupImplementation = () => (
  <DismissibleGroup onDismiss={mockOnDismiss}>
    <DismissibleGroup.Item value="a">
      A
      <DismissibleGroup.Trigger data-cy="trigger-a" aria-label="Dismiss A" />
    </DismissibleGroup.Item>
    <DismissibleGroup.Item value="b">
      B
      <DismissibleGroup.Trigger data-cy="trigger-b" />
    </DismissibleGroup.Item>
    <DismissibleGroup.Item value="c" disabled>
      C
      <DismissibleGroup.Trigger data-cy="trigger-c" />
    </DismissibleGroup.Item>
    <DismissibleGroup.Item value="d" disabled>
      D
    </DismissibleGroup.Item>
  </DismissibleGroup>
)

describe('DismissibleGroup component', () => {
  it('renders', async () => {
    const { container } = render(<DismissibleGroupImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<DismissibleGroupImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('when an Item is dismissed, it calls the onDismiss function with the correct value', async () => {
    const { container } = render(<DismissibleGroupImplementation />)

    const triggerA = container.querySelector('[data-cy="trigger-a"]')
    if (triggerA) fireEvent.click(triggerA)

    expect(mockOnDismiss).toBeCalledWith('a')

    const triggerB = container.querySelector('[data-cy="trigger-b"]')
    if (triggerB) fireEvent.click(triggerB)

    expect(mockOnDismiss).toBeCalledWith('b')

    // disabled
    const triggerC = container.querySelector('[data-cy="trigger-c"]')
    if (triggerC) fireEvent.click(triggerC)

    expect(mockOnDismiss).not.toBeCalledWith
  })
})
