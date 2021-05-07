import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { toast, ToastProvider } from '.'

describe('Toast component', () => {
  const message = 'Message'

  it('renders', async () => {
    render(<ToastProvider />)

    expect(await screen.queryByText(message)).toEqual(null)

    toast(message)

    await waitFor(() => expect(screen.getByText(message)).toBeVisible())
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ToastProvider />)

    toast('Something')

    await waitFor(() => expect(screen.getByText('Something')).toBeVisible())

    expect(await waitFor(() => axe(container))).toHaveNoViolations()
  })
})
