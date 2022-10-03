import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Popover } from '.'

describe(`Popover component`, () => {
  it('renders the trigger with the popover hidden by default', async () => {
    const { container } = render(
      <Popover>
        <Popover.Trigger>TRIGGER</Popover.Trigger>
        <Popover.Content aria-label="test popover">CONTENT</Popover.Content>
      </Popover>
    )

    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('opens the popover once trigger is clicked', async () => {
    render(
      <Popover>
        <Popover.Trigger>TRIGGER</Popover.Trigger>
        <Popover.Content aria-label="test popover">CONTENT</Popover.Content>
      </Popover>
    )

    const trigger = screen.getByText('TRIGGER')

    expect(await trigger).toBeInTheDocument()
    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()

    trigger.focus()
    fireEvent.click(trigger)

    expect(await screen.queryByText('CONTENT')).toBeInTheDocument()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Popover defaultOpen>
        <Popover.Trigger>TRIGGER</Popover.Trigger>
        <Popover.Content aria-label="test popover">CONTENT</Popover.Content>
      </Popover>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
