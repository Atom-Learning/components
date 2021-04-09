import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Toast, toast } from '.'

describe('Toast component', () => {
  const message = 'Message'

  it('renders', async () => {
    render(<Toast />)

    expect(await screen.queryByText(message)).toEqual(null)

    toast(message)

    await waitFor(() => expect(screen.getByText(message)).toBeVisible())
  })

  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Toast />)

    toast(message)

    await waitFor(() => expect(screen.getByText(message)).toBeVisible())

    expect(await waitFor(() => axe(container))).toHaveNoViolations()
  })
})
