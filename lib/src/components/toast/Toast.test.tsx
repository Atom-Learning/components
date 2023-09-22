import {
  render,
  screen,
  waitFor,
  act,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { Info } from '@atom-learning/icons'
import { Tooltip } from '../tooltip'
import { Text } from '../text'
import { Toast, toast, ToastProvider } from '.'
import userEvent from '@testing-library/user-event'

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

    expect(screen.queryByText(message)).toEqual(null)
    expect(screen.queryByText('TEST')).toBeVisible()

    await act(async () => {
      toast(message)
    })

    expect(await screen.findByText(message)).toBeVisible()
    userEvent.click(screen.getByRole('button', { name: /close alert/i }))
    await waitForElementToBeRemoved(() => screen.queryByText(message))
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

  it('renders a custom UI when a component is passed into the toast fn', async () => {
    const message = 'Message'

    render(
      <Wrapper>
        <ToastProvider />
      </Wrapper>
    )

    await act(async () => {
      toast(
        <Toast>
          <Toast.Icon is={Info} />
          <Text>{message}</Text>
          <Toast.Close />
        </Toast>
      )
    })

    expect(await screen.findByText(message)).toBeVisible()
    userEvent.click(screen.getByRole('button', { name: /close alert/i }))
    await waitForElementToBeRemoved(() => screen.queryByText(message))
  })
})
