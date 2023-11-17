import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { SideBar, useSidebarState } from '.'

const ExampleSideBarContent = () => {
  const { isExpanded } = useSidebarState()
  return <>{isExpanded ? 'isExpanded' : 'isNotExpanded'}</>
}

const ExampleSideBar = (props) => (
  <SideBar {...props}>
    <SideBar.Header>
      <SideBar.Brand>
        <SideBar.BrandLogo alt="Logo" src="" />
      </SideBar.Brand>
    </SideBar.Header>
    <SideBar.Body>
      <ExampleSideBarContent />
      <a href="/">Link</a>
    </SideBar.Body>
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

  it('expands on hover & focus', async () => {
    render(<ExampleSideBar role="navigation" />)

    const sidebar = screen.getByRole('navigation').firstChild as HTMLElement
    const link = screen.getByRole('link')

    userEvent.hover(sidebar)
    expect(screen.getByText('isExpanded'))

    userEvent.unhover(sidebar)
    expect(screen.getByText('isNotExpanded'))

    userEvent.tab()
    expect(link).toHaveFocus()
    expect(screen.getByText('isExpanded'))

    userEvent.tab()
    expect(link).not.toHaveFocus()
    expect(screen.getByText('isNotExpanded'))
  })
})
