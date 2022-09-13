import { Search, SwitchOff } from '@atom-learning/icons'
import { IdProvider } from '@radix-ui/react-id'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Flex } from '../flex'
import { TopBar } from '.'

const ExampleTopBar = () => (
  <IdProvider>
    <TopBar>
      <Flex>
        <TopBar.Collapsible>
          <TopBar.CollapsibleTrigger aria-label="toggle mobile menu" />
          <TopBar.CollapsibleContent>Some content</TopBar.CollapsibleContent>
        </TopBar.Collapsible>
      </Flex>
      <TopBar.ActionIcon icon={Search} label="Search" />
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

  it('can toggle display of collapsible content', async () => {
    render(<ExampleTopBar />)
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
