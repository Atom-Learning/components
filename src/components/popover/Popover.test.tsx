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

    // expect(container).toMatchSnapshot()
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
    expect(await axe(container)).toHaveNoViolations()
  })
  it('opens popover using the space key', async () => {
    const { container } = render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )

    fireEvent.keyPress(screen.getByText(/click me/i), {
      key: 'Space',
      code: ' '
    })

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it("doesn't open popover using the keypress with random key press", async () => {
    const { container } = render(
      <Popover id="123" aria-label="Popover" content="Content">
        <button>Click me</button>
      </Popover>
    )

    fireEvent.keyPress(screen.getByText(/click me/i), {
      key: 'A',
      code: 'A'
    })

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders as visible with left variant', async () => {
    const { container } = render(
      <Popover
        id="123"
        initialState
        align="left"
        aria-label="Some text"
        content="Hello"
      />
    )

    await screen.getByRole('tooltip')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
