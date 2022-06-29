import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { toast, ToastProvider } from '.'

describe('Toast component', () => {
  const message = 'Message'

  it('renders', async () => {
    render(<ToastProvider>TEST</ToastProvider>)

    expect(await screen.queryByText(message)).toEqual(null)
    expect(await screen.queryByText('TEST')).toBeVisible()

    toast(message)

    await waitFor(() => expect(screen.getByText(message)).toBeVisible())
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ToastProvider />)

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
