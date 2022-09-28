import { Search, SwitchOff } from '@atom-learning/icons'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { TopBar } from '.'

const ExampleTopBar = (size) => (
  <TopBar size={size}>
    <TopBar.Brand href="atomlearning.co.uk">
      <TopBar.BrandName>Admin Panel</TopBar.BrandName>
    </TopBar.Brand>
    <TopBar.ActionIcon icon={Search} label="Search" />
    <TopBar.Divider />
    <TopBar.ActionIcon icon={SwitchOff} label="Light/Dark mode" />
  </TopBar>
)

describe('TopBar component', () => {
  it('renders without size prop', async () => {
    const { container } = render(<ExampleTopBar />, {
      container: document.body
    })

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues, when no size prop is passed', async () => {
    const { container } = render(<ExampleTopBar />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with the size prop md', async () => {
    const { container } = render(<ExampleTopBar size="md" />, {
      container: document.body
    })

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues, when the size prop md is passed', async () => {
    const { container } = render(<ExampleTopBar size="md" />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with the size prop lg', async () => {
    const { container } = render(<ExampleTopBar size="lg" />, {
      container: document.body
    })

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues, when the size prop lg is passed', async () => {
    const { container } = render(<ExampleTopBar size="lg" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
