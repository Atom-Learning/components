import { Info } from '@atom-learning/icons'
import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Text } from '../text'
import { Tooltip } from '../tooltip'
import { Toast, toast } from '.'

const Wrapper = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('Toast component', () => {
  const message = 'Message'

  it('renders', async () => {
    render(
      <Wrapper>
        <Toast.Provider>TEST</Toast.Provider>
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
        <Toast.Provider />
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
        <Toast.Provider />
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
