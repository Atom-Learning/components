import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tooltip } from '../tooltip'
import { PasswordInput } from '.'

const Wrapper = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe('PasswordInput component', () => {
  it('renders', async () => {
    const { container } = render(
      <Wrapper>
        <PasswordInput />
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <PasswordInput aria-label="password" />
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('toggles password visibility', async () => {
    render(
      <Wrapper>
        <PasswordInput name="password" aria-label="password" />
      </Wrapper>
    )

    const input = screen.getByLabelText('password')

    expect(input).toHaveAttribute('type', 'password')

    userEvent.click(screen.getByLabelText('Show password'))
    expect(input).toHaveAttribute('type', 'text')

    userEvent.click(screen.getByLabelText('Hide password'))
    expect(input).toHaveAttribute('type', 'password')
  })
})
