import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '..'
import { InputField } from '.'

describe(`InputField component`, () => {
  it('renders a field with a text input', async () => {
    const { container } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          css={{ m: 'auto', height: 100, width: 100 }}
          placeholder="INPUT FIELD"
        />
      </Form>
    )

    await screen.getByPlaceholderText('INPUT FIELD')

    expect(container).toMatchSnapshot()
  })

  it('renders a field with a text input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          placeholder="INPUT FIELD"
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a number input', async () => {
    const { container, findByPlaceholderText } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          css={{ m: 'auto', height: 100, width: 100 }}
          type="number"
          placeholder="001"
        />
      </Form>
    )

    const input = await findByPlaceholderText('001')

    expect(input).toHaveAttribute('inputmode', 'numeric')
    expect(input).toHaveAttribute('pattern', '[0-9]*')
    expect(container).toMatchSnapshot()
  })

  it('renders a field with a number input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          type="number"
          placeholder="001"
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input', async () => {
    const { findByPlaceholderText } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          css={{ m: 'auto', height: 100, width: 100 }}
          placeholder="INPUT FIELD"
          disabled
        />
      </Form>
    )

    const input = await findByPlaceholderText('INPUT FIELD')

    expect(input).toHaveAttribute('disabled')
  })

  it('renders a field with a disabled input - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          placeholder="INPUT FIELD"
          disabled
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          validation={{ required: errorText }}
        />
        <button type="submit">Submit</button>
      </Form>
    )
    userEvent.click(getByRole('button'))
    await findByText(errorText)

    expect(container).toMatchSnapshot()
  })

  it('renders a field in error state - has no programmatically detectable a11y issues', async () => {
    const errorText = 'This field is required'

    const { container, findByText, getByRole } = render(
      <Form>
        <InputField
          label="INPUT FIELD"
          name="INPUT FIELD"
          validation={{ required: errorText }}
        />
        <button type="submit">Submit</button>
      </Form>
    )

    userEvent.click(getByRole('button'))
    await findByText(errorText)

    expect(await axe(container)).toHaveNoViolations()
  })
})
