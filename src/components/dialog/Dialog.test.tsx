import { IdProvider } from '@radix-ui/react-id'
import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Dialog } from '.'

const DialogTest = (props) => (
  <IdProvider>
    <Dialog {...props}>
      <Dialog.Trigger>TRIGGER</Dialog.Trigger>
      <Dialog.Content>CONTENT</Dialog.Content>
    </Dialog>
  </IdProvider>
)

describe(`Dialog component`, () => {
  let rendered: RenderResult
  let trigger

  beforeEach(() => {
    rendered = render(<DialogTest />)
    trigger = rendered.getByText('TRIGGER')
  })

  it('renders the trigger with the popover hidden by default', async () => {
    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()
    expect(rendered.container).toMatchSnapshot()
  })

  it('opens the popover once trigger is clicked', async () => {
    render(<DialogTest />)

    expect(await trigger).toBeInTheDocument()
    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()

    trigger.focus()
    userEvent.click(trigger)

    expect(await screen.queryByText('CONTENT')).toBeInTheDocument()

    const dialog = await screen.getByRole('dialog')
    expect(dialog).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  describe(`when open`, () => {
    beforeEach(() => {
      userEvent.click(trigger)
    })

    it('has no programmatically detectable a11y issues', async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })
  })
})

describe('Dialog component without close button', () => {
  it('renders', async () => {
    await render(
      <IdProvider>
        <Dialog>
          <Dialog.Trigger>TRIGGER</Dialog.Trigger>
          <Dialog.Content showCloseButton={false}>CONTENT</Dialog.Content>
        </Dialog>
      </IdProvider>
    )

    const trigger = await screen.getByText('TRIGGER')
    userEvent.click(trigger)

    const dialog = await screen.getByRole('dialog')
    expect(dialog).toMatchSnapshot()
  })
})
