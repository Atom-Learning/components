import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { PasswordField } from '.'
import { Tooltip } from '../tooltip'
const Wrapper = ({ children }) => (
  <Tooltip.Provider>
    <Form onSubmit={() => null}>{children}</Form>
  </Tooltip.Provider>
)

describe(`PasswordField component`, () => {
  it('renders a password field', async () => {
    const { container } = render(
      <Wrapper>
        <PasswordField
          name="password"
          css={{ m: 'auto', height: 100, width: 100 }}
        />
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders a password field - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <PasswordField name="password" />
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with a prompt', async () => {
    const { container } = render(
      <Wrapper>
        <PasswordField
          name="password"
          prompt={{ label: 'Hello', link: '/somewhere' }}
        />
      </Wrapper>
    )

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })
})
