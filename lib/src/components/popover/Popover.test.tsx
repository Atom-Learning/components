import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Popover } from '.'
import { Tooltip } from '../tooltip'

const Wrapper = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe(`Popover component`, () => {
  it('renders the trigger with the popover hidden by default', async () => {
    const { container } = render(
      <Wrapper>
        <Popover>
          <Popover.Trigger>TRIGGER</Popover.Trigger>
          <Popover.Content aria-label="test popover">CONTENT</Popover.Content>
        </Popover>
      </Wrapper>
    )

    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('opens the popover once trigger is clicked', async () => {
    render(
      <Wrapper>
        <Popover>
          <Popover.Trigger>TRIGGER</Popover.Trigger>
          <Popover.Content aria-label="test popover">CONTENT</Popover.Content>
        </Popover>
      </Wrapper>
    )

    const trigger = screen.getByText('TRIGGER')

    expect(await trigger).toBeInTheDocument()
    expect(await screen.queryByText('CONTENT')).not.toBeInTheDocument()

    trigger.focus()
    fireEvent.click(trigger)

    expect(await screen.queryByText('CONTENT')).toBeInTheDocument()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <Popover defaultOpen>
          <Popover.Trigger>TRIGGER</Popover.Trigger>
          <Popover.Content aria-label="test popover">CONTENT</Popover.Content>
        </Popover>
      </Wrapper>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
