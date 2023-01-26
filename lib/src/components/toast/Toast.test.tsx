import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { toast, ToastProvider } from '.'

describe('Toast component', () => {
  const message = 'Message'

  it('renders', async () => {
    render(
      <Tooltip.Provider>
        <ToastProvider>TEST</ToastProvider>
      </Tooltip.Provider>
    )

    expect(await screen.queryByText(message)).toEqual(null)
    expect(await screen.queryByText('TEST')).toBeVisible()

    toast(message)

    await waitFor(() => expect(screen.getByText(message)).toBeVisible())
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Tooltip.Provider>
        <ToastProvider />
      </Tooltip.Provider>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
