import { IdProvider } from '@radix-ui/react-id'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '.'

describe(`Tooltip component`, () => {
  it('renders a tooltip', async () => {
    const { container } = render(
      <IdProvider>
        <Tooltip>
          <Tooltip.Trigger>
            <span>TOOLTIP</span>
          </Tooltip.Trigger>
          <Tooltip.Content>CONTENT</Tooltip.Content>
        </Tooltip>
      </IdProvider>
    )

    fireEvent.mouseOver(screen.getByText('TOOLTIP'))

    expect(await screen.findByRole('tooltip')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <IdProvider>
        <Tooltip defaultOpen>
          <Tooltip.Trigger>
            <span>TOOLTIP</span>
          </Tooltip.Trigger>
          <Tooltip.Content>CONTENT</Tooltip.Content>
        </Tooltip>
      </IdProvider>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 2000 })
    ).toHaveNoViolations()
  })
})
