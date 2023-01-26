import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { Tooltip } from '../tooltip'
import { PasswordField } from '.'

/** `PasswordInput` uses `ActionIcon` that renders a tooltip so it needs a `Tooltip.Provider`.
 * In practice, `Tooltip.Provider` is rendered once at the root of an app,
 * but this wrapper provides it for these tests.
 */
const Wrapper: React.FC = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)
describe(`PasswordField component`, () => {
  it('renders a password field', async () => {
    const { container } = render(
      <Wrapper>
        <Form>
          <PasswordField
            name="password"
            css={{ m: 'auto', height: 100, width: 100 }}
          />
        </Form>
      </Wrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders a password field - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <Form>
          <PasswordField name="password" />
        </Form>
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with a prompt', async () => {
    const { container } = render(
      <Wrapper>
        <Form>
          <PasswordField
            name="password"
            prompt={{ label: 'Hello', link: '/somewhere' }}
          />
        </Form>
      </Wrapper>
    )

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })
})
