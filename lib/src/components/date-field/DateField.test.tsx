import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '..'
import { DateField } from '.'
import { Tooltip } from '../tooltip'

/** Component uses `ActionIcon` that renders a tooltip so it needs a `Tooltip.Provider`.
 * In practice, `Tooltip.Provider` is rendered once at the root of an app,
 * but this wrapper provides it for these tests.
 */
const Wrapper: React.FC = ({ children }) => (
  <Tooltip.Provider>{children}</Tooltip.Provider>
)

describe(`DateField component`, () => {
  it('renders a field with a text input', async () => {
    const { container } = render(
      <Wrapper>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            placeholder="DATE FIELD"
          />
        </Form>
      </Wrapper>
    )

    await screen.getByPlaceholderText('DATE FIELD')

    expect(container).toMatchSnapshot()
  })

  it('renders a field with a text input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            placeholder="DATE FIELD"
          />
        </Form>
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input', async () => {
    const { findByPlaceholderText } = render(
      <Wrapper>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            placeholder="DATE FIELD"
            disabled
          />
        </Form>
      </Wrapper>
    )

    const input = await findByPlaceholderText('DATE FIELD')

    expect(input).toHaveAttribute('disabled')
  })

  it('renders a field with a disabled input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            placeholder="DATE FIELD"
            disabled
          />
        </Form>
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <Wrapper>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            validation={{ required: errorText }}
          />
          <button type="submit">Submit</button>
        </Form>
      </Wrapper>
    )
    userEvent.click(getByRole('button', { name: /submit/i }))
    await findByText(errorText)

    expect(container).toMatchSnapshot()
  })

  it('renders a field in error state - has no programmatically detectable a11y issues', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <Wrapper>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            validation={{ required: errorText }}
          />
          <button type="submit">Submit</button>
        </Form>
      </Wrapper>
    )

    userEvent.click(getByRole('button', { name: /submit/i }))
    await findByText(errorText)

    expect(await axe(container)).toHaveNoViolations()
  })
})
