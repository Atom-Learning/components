import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { DropdownMenu } from '.'

const ExampleDropdownMenu = (props) => (
  <DropdownMenu {...props}>
    <DropdownMenu.Trigger>TRIGGER</DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item>Item 2</DropdownMenu.Item>
      <DropdownMenu.LinkItem href="http://google.com">
        Item 3
      </DropdownMenu.LinkItem>
      <DropdownMenu.Separator />
      <DropdownMenu.LinkItem href="/logout">Log Out</DropdownMenu.LinkItem>
    </DropdownMenu.Content>
  </DropdownMenu>
)

describe('DropdownMenu component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleDropdownMenu defaultOpen />, {
      container: document.body
    })

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleDropdownMenu defaultOpen />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('opens menu onClick of trigger', async () => {
    render(<ExampleDropdownMenu />)

    const trigger = screen.getByText('TRIGGER')

    expect(await trigger).toBeInTheDocument()

    expect(await screen.queryByText('Item 1')).not.toBeInTheDocument()
    userEvent.click(trigger)
    waitFor(async () =>
      expect(await screen.queryByText('Item 1')).toBeInTheDocument()
    )
  })
})
