import { screen } from '@testing-library/dom'
import { fireEvent, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { DismissibleGroup } from '.'

const mockOnDismiss = jest.fn((value) => null)

const DismissibleGroupImplementation = () => (
  <DismissibleGroup onDismiss={mockOnDismiss}>
    <DismissibleGroup.Item value="a">
      A
      <DismissibleGroup.Trigger
        data-testid="trigger-a"
        aria-label="Dismiss A"
      />
    </DismissibleGroup.Item>
    <DismissibleGroup.Item value="b">
      B
      <DismissibleGroup.Trigger data-testid="trigger-b" />
    </DismissibleGroup.Item>
    <DismissibleGroup.Item value="c" disabled>
      C
      <DismissibleGroup.Trigger data-testid="trigger-c" />
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
    render(<DismissibleGroupImplementation />)

    const triggerA = screen.getByTestId('trigger-a')
    if (triggerA) fireEvent.click(triggerA)

    expect(mockOnDismiss).toBeCalledWith('a')

    const triggerB = screen.getByTestId('trigger-b')
    if (triggerB) fireEvent.click(triggerB)

    expect(mockOnDismiss).toBeCalledWith('b')

    // disabled
    const triggerC = screen.getByTestId('trigger-c')
    if (triggerC) fireEvent.click(triggerC)

    expect(mockOnDismiss).not.toBeCalledWith
  })
})
