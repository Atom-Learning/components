import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '.'

describe(`Tooltip component`, () => {
  it('renders a tooltip', async () => {
    const { container } = render(
      <Tooltip.Provider>
        <Tooltip>
          <Tooltip.Trigger>TOOLTIP</Tooltip.Trigger>
          <Tooltip.Content>CONTENT</Tooltip.Content>
        </Tooltip>
      </Tooltip.Provider>
    )

    fireEvent.focus(screen.getByText('TOOLTIP'))

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Tooltip.Provider>
        <Tooltip defaultOpen>
          <Tooltip.Trigger>TOOLTIP</Tooltip.Trigger>
          <Tooltip.Content>CONTENT</Tooltip.Content>
        </Tooltip>
      </Tooltip.Provider>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
