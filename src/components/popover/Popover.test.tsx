import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Popover } from '.'

describe(`Popover component`, () => {
  it('renders the trigger with the popover hidden by default', async () => {
    const { container } = render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )

    expect(await screen.getByText('Click me')).toBeInTheDocument()
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('renders the trigger with the popover hidden by default - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('opens the popover once trigger is clicked', async () => {
    const { container } = render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )
    const button = screen.getByRole('button', { name: /Click me/ })

    button.focus()
    fireEvent.click(button)

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByRole('tooltip')).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('opens the popover once trigger is clicked - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )
    const button = screen.getByRole('button', { name: /Click me/ })

    button.focus()
    fireEvent.click(button)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('opens popover using the space key', async () => {
    render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )

    fireEvent.keyPress(screen.getByText(/click me/i), {
      key: 'Space',
      code: ' '
    })

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it("doesn't open popover using the keypress with random key press", async () => {
    render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )

    fireEvent.keyPress(screen.getByText(/click me/i), {
      key: 'A',
      code: 'A'
    })

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders as visible with left variant', async () => {
    const { container } = render(
      <Popover
        id="123"
        defaultOpen
        align="left"
        aria-label="Some text"
        content="Hello"
      />
    )

    await screen.getByRole('tooltip')

    expect(container).toMatchSnapshot()
  })

  it('renders as visible with left variant - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Popover
        id="123"
        defaultOpen
        align="left"
        aria-label="Some text"
        content="Hello"
      />
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
