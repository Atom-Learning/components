import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { Tooltip } from '../tooltip'

import { toast, ToastProvider } from '.'

const Wrapper = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('Toast component', () => {
  const message = 'Message'

  it('renders', async () => {
    render(
      <Wrapper>
        <ToastProvider>TEST</ToastProvider>
      </Wrapper>
    )

    expect(await screen.queryByText(message)).toEqual(null)
    expect(await screen.queryByText('TEST')).toBeVisible()

    toast(message)

    await waitFor(() => expect(screen.getByText(message)).toBeVisible())
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <ToastProvider />
      </Wrapper>
    )

    expect(
      await waitFor(() => axe(container), { timeout: 5000 })
    ).toHaveNoViolations()
  })
})
