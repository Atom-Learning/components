import { fireEvent, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Dismissible } from '.'

const mockOnDismiss = jest.fn((value) => null)

const DismissibleImplementation = () => (
  <Dismissible.Root value="a" onDismiss={mockOnDismiss} data-cy="root">
    A
    <Dismissible.Trigger data-cy="trigger" />
  </Dismissible.Root>
)

const DismissibleImplementationCustomOverrides = () => (
  <Dismissible.Root value="a" onDismiss={mockOnDismiss} asChild>
    <div data-cy="custom-root">
      A
      <Dismissible.Trigger asChild>
        <button type="button" data-cy="custom-trigger" aria-label="Dismiss 'A'">
          x
        </button>
      </Dismissible.Trigger>
    </div>
  </Dismissible.Root>
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
    const { container } = render(<DismissibleImplementation />)

    const root = container.querySelector('[data-cy="root"]')
    expect(root).toBeVisible()

    const trigger = container.querySelector('[data-cy="trigger"]')
    if (trigger) fireEvent.click(trigger)

    expect(root).not.toBeVisible()
  })

  it('when dismissed calls the onDismiss function with the correct value', async () => {
    const { container } = render(<DismissibleImplementation />)

    const trigger = container.querySelector('[data-cy="trigger"]')
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
      const { container } = render(<DismissibleImplementationCustomOverrides />)

      const root = container.querySelector('[data-cy="custom-root"]')
      expect(root).toBeVisible()

      const trigger = container.querySelector('[data-cy="custom-trigger"]')
      if (trigger) fireEvent.click(trigger)

      expect(root).not.toBeVisible()
    })
  })
})
