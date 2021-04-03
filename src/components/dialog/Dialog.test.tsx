import { IdProvider } from '@radix-ui/react-id'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Dialog } from '.'

describe(`Dialog component`, () => {
  it('renders the trigger with the popover hidden by default', async () => {
    const { container } = render(
      <IdProvider>
        <Dialog>
          <Dialog.Trigger as="button">TRIGGER</Dialog.Trigger>
          <Dialog.Content>CONTENT</Dialog.Content>
        </Dialog>
      </IdProvider>
    )

    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('opens the popover once trigger is clicked', async () => {
    render(
      <IdProvider>
        <Dialog>
          <Dialog.Trigger as="button">TRIGGER</Dialog.Trigger>
          <Dialog.Content>CONTENT</Dialog.Content>
        </Dialog>
      </IdProvider>
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
      <IdProvider>
        <Dialog defaultOpen>
          <Dialog.Trigger as="button">TRIGGER</Dialog.Trigger>
          <Dialog.Content>CONTENT</Dialog.Content>
        </Dialog>
      </IdProvider>
    )

    expect(await waitFor(() => axe(container))).toHaveNoViolations()
  })
})
