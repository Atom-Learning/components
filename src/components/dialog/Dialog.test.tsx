import { IdProvider } from '@radix-ui/react-id'
import { fireEvent, render, screen } from '@testing-library/react'
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
  let rendered
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
    fireEvent.click(trigger)

    expect(await screen.queryByText('CONTENT')).toBeInTheDocument()
  })

  it('has no programmatically detectable a11y issues', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  describe(`when open`, () => {
    beforeEach(() => {
      fireEvent.click(trigger)
    })

    it('has no programmatically detectable a11y issues', async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })
  })
})
