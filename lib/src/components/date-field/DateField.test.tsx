import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '..'
import { Tooltip } from '../tooltip'
import { DateField } from '.'

const Wrapper = ({ children }) => (
  <Tooltip.Provider>
    <Form onSubmit={() => null}>{children}</Form>
  </Tooltip.Provider>
)

describe(`DateField component`, () => {
  it('renders a field with a text input', async () => {
    const { container } = render(
      <Wrapper>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          placeholder="DATE FIELD"
        />
      </Wrapper>
    )

    await screen.getByPlaceholderText('DATE FIELD')

    expect(container).toMatchSnapshot()
  })

  it('renders a field with a text input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          placeholder="DATE FIELD"
        />
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input', async () => {
    const { findByPlaceholderText } = render(
      <Wrapper>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          placeholder="DATE FIELD"
          disabled
        />
      </Wrapper>
    )

    const input = await findByPlaceholderText('DATE FIELD')

    expect(input).toHaveAttribute('disabled')
  })

  it('renders a field with a disabled input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Wrapper>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          placeholder="DATE FIELD"
          disabled
        />
      </Wrapper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <Wrapper>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          validation={{ required: errorText }}
        />
        <button type="submit">Submit</button>
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
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          validation={{ required: errorText }}
        />
        <button type="submit">Submit</button>
      </Wrapper>
    )

    userEvent.click(getByRole('button', { name: /submit/i }))
    await findByText(errorText)

    expect(await axe(container)).toHaveNoViolations()
  })
})
