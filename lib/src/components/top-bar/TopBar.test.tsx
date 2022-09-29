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
  it('renders', async () => {
    const { container } = render(<ExampleTopBar />, {
      container: document.body
    })

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleTopBar />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the lg variant', async () => {
    const { container } = render(<ExampleTopBar size="lg" />, {
      container: document.body
    })

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues, in the lg variant', async () => {
    const { container } = render(<ExampleTopBar size="lg" />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
