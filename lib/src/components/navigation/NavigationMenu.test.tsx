import { IdProvider } from '@radix-ui/react-id'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { NavigationMenu } from '.'

const ExampleNav = () => (
  <IdProvider>
    <NavigationMenu>
      <NavigationMenu.Link href="/introduction">
        Introduction
      </NavigationMenu.Link>
      <NavigationMenu.Dropdown title="Theme">
        <NavigationMenu.DropdownContent>
          <NavigationMenu.DropdownItem href="https://app.atomlearning.co.uk/colours">
            Colours
          </NavigationMenu.DropdownItem>
          <NavigationMenu.DropdownItem href="https://app.atomlearning.co.uk/effects">
            Effects
          </NavigationMenu.DropdownItem>
          <NavigationMenu.DropdownItem href="https://app.atomlearning.co.uk/icons">
            Icons
          </NavigationMenu.DropdownItem>
        </NavigationMenu.DropdownContent>
      </NavigationMenu.Dropdown>
    </NavigationMenu>
  </IdProvider>
)

describe('Nav component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleNav />, {
      container: document.body
    })

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

    userEvent.click(screen.getByRole('button', { name: /theme/i }))

    const dropdownList = within(
      screen.getByLabelText(/Theme/i, { selector: 'div' })
    ).getByRole('list')
    const dropdownListItems = within(dropdownList).getAllByRole('listitem')

    expect(dropdownListItems.length).toEqual(3)

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
