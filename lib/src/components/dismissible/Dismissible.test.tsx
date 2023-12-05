import { screen } from '@testing-library/dom'
import { fireEvent, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Dismissible } from '.'

const mockOnDismiss = jest.fn(() => null)

const DismissibleImplementation = () => (
  <Dismissible onDismiss={mockOnDismiss} data-testid="root">
    A
    <Dismissible.Trigger data-testid="trigger" />
  </Dismissible>
)

const DismissibleImplementationCustomOverrides = () => (
  <Dismissible onDismiss={mockOnDismiss} asChild>
    <div data-testid="custom-root">
      A
      <Dismissible.Trigger asChild>
        <button
          type="button"
          data-testid="custom-trigger"
          aria-label="Dismiss 'A'"
        >
          x
        </button>
      </Dismissible.Trigger>
    </div>
  </Dismissible>
)

describe('Dismissible component', () => {
  it('renders', async () => {
    const { container } = render(<DismissibleImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<DismissibleImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('is dismissed when the trigger is pressed', async () => {
    render(<DismissibleImplementation />)

    const root = screen.getByTestId('root')
    expect(root).toBeVisible()

    const trigger = screen.getByTestId('trigger')
    if (trigger) fireEvent.click(trigger)

    expect(root).not.toBeVisible()
  })

  it('when dismissed calls the onDismiss function', async () => {
    render(<DismissibleImplementation />)

    const trigger = screen.getByTestId('trigger')
    if (trigger) fireEvent.click(trigger)

    expect(mockOnDismiss).toBeCalled()
  })

  describe('when it is using custom component overrides', () => {
    it('renders', async () => {
      const { container } = render(<DismissibleImplementationCustomOverrides />)

      expect(container).toMatchSnapshot()
    })

    it('has no programmatically detectable a11y issues', async () => {
      const { container } = render(<DismissibleImplementationCustomOverrides />)

      expect(await axe(container)).toHaveNoViolations()
    })

    it('is dismissed when the trigger is pressed', async () => {
      render(<DismissibleImplementationCustomOverrides />)

      const root = screen.getByTestId('custom-root')
      expect(root).toBeVisible()

      const trigger = screen.getByTestId('custom-trigger')
      if (trigger) fireEvent.click(trigger)

      expect(root).not.toBeVisible()
    })
  })
})
