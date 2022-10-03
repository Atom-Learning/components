import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Dismissible } from '.'

const mockOnDismiss = jest.fn((value) => null)

const DismissibleImplementation = () => (
  <Dismissible value="a" onDismiss={mockOnDismiss} data-testid="root">
    A
    <Dismissible.Trigger data-testid="trigger" />
  </Dismissible>
)

const DismissibleImplementationCustomOverrides = () => (
  <Dismissible value="a" onDismiss={mockOnDismiss} asChild>
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

  it('when dismissed calls the onDismiss function with the correct value', async () => {
    render(<DismissibleImplementation />)

    const trigger = screen.getByTestId('trigger')
    if (trigger) fireEvent.click(trigger)

    expect(mockOnDismiss).toBeCalledWith('a')
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
