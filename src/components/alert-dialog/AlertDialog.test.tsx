import { IdProvider } from '@radix-ui/react-id'
import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { AlertDialog } from '.'

const AlertDialogTest = (props) => (
  <IdProvider>
    <AlertDialog {...props}>
      <AlertDialog.Trigger as="button">TRIGGER</AlertDialog.Trigger>
      <AlertDialog.Content>CONTENT</AlertDialog.Content>
    </AlertDialog>
  </IdProvider>
)

describe(`AlertDialog component`, () => {
  let rendered
  let trigger

  beforeEach(() => {
    rendered = render(<AlertDialogTest />)
    trigger = rendered.getByText('TRIGGER')
  })

  it('renders the trigger with the dialog hidden by default', async () => {
    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()
    expect(rendered.container).toMatchSnapshot()
  })

  it('opens the dialog once trigger is clicked', async () => {
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
