import { IdProvider } from '@radix-ui/react-id'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'
import * as React from 'react'

import { Collapsible } from '.'
import { Text } from '../text'

const triggerText = 'This is the trigger'
const contentText = 'This is the content'

const Component = ({ showDivider = false }) => (
  <IdProvider>
    <Collapsible space={4}>
      <Collapsible.Trigger>
        <Text>{triggerText}</Text>
      </Collapsible.Trigger>
      <Collapsible.Content showDivider={showDivider} data-testid="content">
        {contentText}
      </Collapsible.Content>
    </Collapsible>
  </IdProvider>
)

describe('Collapsible component', () => {
  it('renders a Collapsible', () => {
    const { container } = render(<Component showDivider />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Component showDivider />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('toggles the content on trigger click', () => {
    render(<Component />)

    const trigger = screen.getByRole('button', { name: triggerText })
    const content = screen.getByTestId('content')

    expect(trigger).toHaveAttribute('data-state', 'closed')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    expect(content).toHaveAttribute('data-state', 'closed')
    expect(screen.queryByText(contentText)).toBeNull()

    userEvent.click(trigger)

    expect(trigger).toHaveAttribute('data-state', 'open')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    expect(content).toHaveAttribute('data-state', 'open')
    expect(screen.getByText(contentText)).toBeVisible()

    userEvent.click(trigger)

    expect(trigger).toHaveAttribute('data-state', 'closed')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    expect(content).toHaveAttribute('data-state', 'closed')
    expect(screen.queryByText(contentText)).toBeNull()
  })

  it('only renders a divider with the `showDivider` prop', () => {
    const { rerender } = render(<Component />)

    userEvent.click(screen.getByRole('button', { name: triggerText }))

    expect(screen.queryByRole('separator')).toBeNull()

    rerender(<Component showDivider />)

    expect(screen.getByRole('separator')).toBeVisible()
  })
})
