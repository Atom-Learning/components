import { IdProvider } from '@radix-ui/react-id'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '..'
import { DateField } from '.'

describe(`DateField component`, () => {
  it('renders a field with a text input', async () => {
    const { container } = render(
      <IdProvider>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            placeholder="DATE FIELD"
          />
        </Form>
      </IdProvider>
    )

    await screen.getByPlaceholderText('DATE FIELD')

    expect(container).toMatchSnapshot()
  })

  it('renders a field with a text input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form onSubmit={() => null}>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          placeholder="DATE FIELD"
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input', async () => {
    const { findByPlaceholderText } = render(
      <Form onSubmit={() => null}>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          placeholder="DATE FIELD"
          disabled
        />
      </Form>
    )

    const input = await findByPlaceholderText('DATE FIELD')

    expect(input).toHaveAttribute('disabled')
  })

  it('renders a field with a disabled input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form onSubmit={() => null}>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          placeholder="DATE FIELD"
          disabled
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <IdProvider>
        <Form onSubmit={() => null}>
          <DateField
            label="DATE FIELD"
            name="DATE FIELD"
            validation={{ required: errorText }}
          />
          <button type="submit">Submit</button>
        </Form>
      </IdProvider>
    )
    userEvent.click(getByRole('button', { name: /submit/i }))
    await findByText(errorText)

    expect(container).toMatchSnapshot()
  })

  it('renders a field in error state - has no programmatically detectable a11y issues', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <Form onSubmit={() => null}>
        <DateField
          label="DATE FIELD"
          name="DATE FIELD"
          validation={{ required: errorText }}
        />
        <button type="submit">Submit</button>
      </Form>
    )

    userEvent.click(getByRole('button', { name: /submit/i }))
    await findByText(errorText)

    expect(await axe(container)).toHaveNoViolations()
  })
})
