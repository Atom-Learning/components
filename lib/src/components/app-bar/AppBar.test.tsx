import { IdProvider } from '@radix-ui/react-id'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'
import { Search, Settings, User, SwitchOff } from '@atom-learning/icons'

import { AppBar } from '.'
import { DropdownMenu } from '../dropdown-menu'
import { Flex } from '../flex'
import { Text } from '../text'

const ExampleAppBar = () => (
  <IdProvider>
    <AppBar>
      <Flex>
        <AppBar.Collapsible>
          <AppBar.CollapsibleTrigger aria-label="toggle mobile menu" />
          <AppBar.CollapsibleContent>Some content</AppBar.CollapsibleContent>
        </AppBar.Collapsible>
      </Flex>
      <AppBar.Actions>
        <AppBar.ActionIcon icon={Search} label="Search" />
        <AppBar.ActionIcon icon={SwitchOff} label="Light/Dark mode" />
        <AppBar.ActionsOverflowMenu>
          <DropdownMenu.Item>
            <AppBar.ActionIcon icon={Settings} label="Settings" />
            <Text>Settings</Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <AppBar.ActionIcon icon={User} label="Your profile" />
            <Text>Profile</Text>
          </DropdownMenu.Item>
        </AppBar.ActionsOverflowMenu>
      </AppBar.Actions>
    </AppBar>
  </IdProvider>
)

describe('AppBar component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleAppBar />, {
      container: document.body
    })

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleAppBar />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('can toggle display of collapsible content', async () => {
    render(<ExampleAppBar />)
    const trigger = screen.getByRole('button', {
      name: /toggle mobile menu/i
    })
    userEvent.click(trigger)

    const collapsibleContent = screen.queryByText('Some content')
    expect(collapsibleContent).toBeVisible()

    userEvent.click(trigger)
    expect(collapsibleContent).not.toBeVisible()
  })
})
