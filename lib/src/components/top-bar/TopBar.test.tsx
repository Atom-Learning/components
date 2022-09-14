import { Search, SwitchOff } from '@atom-learning/icons'
import { IdProvider } from '@radix-ui/react-id'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { TopBar } from '.'

const ExampleTopBar = () => (
  <IdProvider>
    <TopBar>
      <TopBar.Brand href="atomlearning.co.uk">Admin Panel</TopBar.Brand>
      <TopBar.ActionIcon icon={Search} label="Search" />
      <TopBar.Divider />
      <TopBar.ActionIcon icon={SwitchOff} label="Light/Dark mode" />
    </TopBar>
  </IdProvider>
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
})
