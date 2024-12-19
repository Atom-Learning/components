import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Flex } from '../flex'
import { Text } from '../text'
import { NavigationMenu } from '.'

const ExampleNav = () => (
  <NavigationMenu>
    <NavigationMenu.Link href="/introduction">Introduction</NavigationMenu.Link>
    <NavigationMenu.Dropdown id="1">
      <NavigationMenu.DropdownTrigger>Theme</NavigationMenu.DropdownTrigger>
      <NavigationMenu.DropdownContent>
        <NavigationMenu.DropdownItem href="https://app.atomlearning.co.uk/colours">
          <Flex css={{ flexDirection: 'column' }}>
            <NavigationMenu.DropdownItemTitle>
              Colours
            </NavigationMenu.DropdownItemTitle>
            <Text>Atom Learning color palette</Text>
          </Flex>
        </NavigationMenu.DropdownItem>
        <NavigationMenu.DropdownItem href="https://app.atomlearning.co.uk/effects">
          Effects
        </NavigationMenu.DropdownItem>
        <NavigationMenu.DropdownItem href="https://app.atomlearning.co.uk/icons">
          Icons
        </NavigationMenu.DropdownItem>
        <NavigationMenu.DropdownItem disabled href="">
          Icons
        </NavigationMenu.DropdownItem>
      </NavigationMenu.DropdownContent>
    </NavigationMenu.Dropdown>
  </NavigationMenu>
)

describe('Nav component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleNav />, {
      container: document.body
    })

    await userEvent.click(screen.getByRole('button', { name: /theme/i }))

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleNav />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('displays the correct number of nav items', async () => {
    render(<ExampleNav />)
    expect(screen.getAllByRole('listitem').length).toEqual(2)
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('Theme')).toBeInTheDocument()
  })

  it('displays links when nav dropdown trigger is clicked', async () => {
    render(<ExampleNav />)

    await userEvent.click(screen.getByRole('button', { name: /theme/i }))

    const dropdownList = within(
      screen.getByLabelText(/Theme/i, { selector: 'div' })
    ).getByRole('list')
    const dropdownListItems = within(dropdownList).getAllByRole('listitem')

    expect(dropdownListItems.length).toEqual(4)

    expect(screen.getByRole('link', { name: /colours/i })).toHaveAttribute(
      'href',
      'https://app.atomlearning.co.uk/colours'
    )
    expect(screen.getByRole('link', { name: /effects/i })).toHaveAttribute(
      'href',
      'https://app.atomlearning.co.uk/effects'
    )
    expect(screen.getByRole('link', { name: /icons/i })).toHaveAttribute(
      'href',
      'https://app.atomlearning.co.uk/icons'
    )
  })
})
