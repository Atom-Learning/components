import { Search, SwitchOff } from '@atom-learning/icons'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { TopBar } from '.'

const ExampleTopBar = (props) => (
  <Tooltip.Provider>
    <TopBar {...props}>
      <TopBar.ActionIcon icon={Search} label="Search" />
      <TopBar.Divider />
      <TopBar.ActionIcon icon={SwitchOff} label="Light/Dark mode" />
    </TopBar>
  </Tooltip.Provider>
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
