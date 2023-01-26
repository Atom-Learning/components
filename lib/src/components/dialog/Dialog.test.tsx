import type { RenderResult } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { Dialog } from '.'

const DialogTest = (props) => (
  <Tooltip.Provider>
    <Dialog {...props}>
      <Dialog.Trigger>TRIGGER</Dialog.Trigger>
      <Dialog.Content>CONTENT</Dialog.Content>
    </Dialog>
  </Tooltip.Provider>
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
      <Dialog>
        <Dialog.Trigger>TRIGGER</Dialog.Trigger>
        <Dialog.Content showCloseButton={false}>CONTENT</Dialog.Content>
      </Dialog>
    )

    const trigger = await screen.getByText('TRIGGER')
    userEvent.click(trigger)

    const dialog = await screen.getByRole('dialog')
    expect(dialog).toMatchSnapshot()
  })
})

describe('Dialog component with custom background', () => {
  it('renders', async () => {
    await render(
      <Tooltip.Provider>
        <Dialog>
          <Dialog.Trigger>TRIGGER</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Background>CUSTOM BACKGROUND</Dialog.Background>
            CONTENT
          </Dialog.Content>
        </Dialog>
      </Tooltip.Provider>
    )

    const trigger = await screen.getByText('TRIGGER')
    userEvent.click(trigger)

    const dialog = await screen.getByRole('dialog')

    // Since background is a sibling to content
    expect(dialog.parentElement).toMatchSnapshot()
  })
})
