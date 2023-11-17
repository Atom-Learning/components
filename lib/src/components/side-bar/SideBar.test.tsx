import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { SideBar } from '.'

const ExampleSideBar = (props) => (
  <SideBar {...props}>
    <SideBar.Header>
      <SideBar.Brand>
        <SideBar.BrandLogo alt="Logo" src="" />
      </SideBar.Brand>
    </SideBar.Header>
    <SideBar.Body>Main content</SideBar.Body>
    <SideBar.Footer>Footer content</SideBar.Footer>
  </SideBar>
)

describe('SideBar component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleSideBar />)
    expect(container).toMatchSnapshot()
  })

  it('renders as static type', async () => {
    const { container } = render(<ExampleSideBar type="static" />)
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleSideBar />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders as expanded', async () => {
    const { container } = render(<ExampleSideBar role="navigation" />)

    const sidebar = screen.getByRole('navigation')
    userEvent.hover(sidebar)
    expect(container).toMatchSnapshot()
  })
})
