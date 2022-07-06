import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { PasswordInput } from '.'

describe('PasswordInput component', () => {
  it('renders', async () => {
    const { container } = render(<PasswordInput />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<PasswordInput aria-label="password" />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('toggles password visibility', async () => {
    render(<PasswordInput name="password" aria-label="password" />)

    const input = screen.getByLabelText('password')

    expect(input).toHaveAttribute('type', 'password')

    await userEvent.click(screen.getByLabelText('Show password'))
    expect(input).toHaveAttribute('type', 'text')

    await userEvent.click(screen.getByLabelText('Hide password'))
    expect(input).toHaveAttribute('type', 'password')
  })
})
