import { IdProvider } from '@radix-ui/react-id'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Nav } from '.'

const ExampleNav = () => (
  <IdProvider>
    <Nav>
      <Nav.Link href="/introduction">Introduction</Nav.Link>
      <Nav.Dropdown title="Theme">
        <Nav.DropdownContent>
          <Nav.DropdownItem href="https://app.atomlearning.co.uk/colours">
            Colours
          </Nav.DropdownItem>
          <Nav.DropdownItem href="https://app.atomlearning.co.uk/effects">
            Effects
          </Nav.DropdownItem>
          <Nav.DropdownItem href="https://app.atomlearning.co.uk/icons">
            Icons
          </Nav.DropdownItem>
        </Nav.DropdownContent>
      </Nav.Dropdown>
    </Nav>
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
