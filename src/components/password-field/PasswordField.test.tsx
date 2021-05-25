import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { PasswordField } from '.'

describe(`Password component`, () => {
  it('renders a password field', async () => {
    const { container } = render(
      <Form>
        <PasswordField
          name="password"
          css={{ m: 'auto', height: 100, width: 100 }}
        />
      </Form>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders a password field - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <PasswordField name="password" />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with a prompt', async () => {
    const { container } = render(
      <Form>
        <PasswordField
          name="password"
          prompt={{ label: 'Hello', link: '/somewhere' }}
        />
      </Form>
    )

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })
})
