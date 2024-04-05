import type { RenderResult } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { Drawer } from './Drawer'

const DrawerImplementation = () => {
  return (
    <Tooltip.Provider>
      <Drawer>
        <Drawer.Trigger>TRIGGER</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            HEADER
            <Drawer.Close label="Close" />
          </Drawer.Header>
          <Drawer.Main>BODY</Drawer.Main>
          <Drawer.Footer>FOOTER</Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </Tooltip.Provider>
  )
}

describe('Drawer', () => {
  let rendered: RenderResult
  let trigger

  beforeEach(() => {
    rendered = render(<DrawerImplementation />)
    trigger = rendered.getByText('TRIGGER')
  })

  it('renders the trigger with the popover hidden by default', async () => {
    expect(screen.queryByText('BODY')).not.toBeInTheDocument()
    expect(rendered.container).toMatchSnapshot()
  })

  it('opens the popover once trigger is clicked', async () => {
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('BODY')).not.toBeInTheDocument()

    trigger.focus()
    userEvent.click(trigger)

    expect(screen.queryByText('BODY')).toBeInTheDocument()

    const dialog = screen.getByRole('dialog')
    expect(dialog).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})
