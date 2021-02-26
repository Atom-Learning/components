import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { InputField } from '.'

describe(`InputField component`, () => {
  it('renders a field with a text input', async () => {
    const { container } = render(
      <InputField
        label="INPUT FIELD"
        name="INPUT FIELD"
        css={{ m: 'auto', height: 100, width: 100 }}
        placeholder="INPUT FIELD"
      />
    )

    await screen.getByPlaceholderText('INPUT FIELD')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a  number input', async () => {
    const { container, findByPlaceholderText } = render(
      <InputField
        label="INPUT FIELD"
        name="INPUT FIELD"
        css={{ m: 'auto', height: 100, width: 100 }}
        type="number"
        placeholder="001"
      />
    )

    const input = await findByPlaceholderText('001')

    expect(input).toHaveAttribute('inputmode', 'numeric')
    expect(input).toHaveAttribute('pattern', '[0-9]*')
    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input', async () => {
    const { container, findByPlaceholderText } = render(
      <InputField
        label="INPUT FIELD"
        name="INPUT FIELD"
        css={{ m: 'auto', height: 100, width: 100 }}
        placeholder="INPUT FIELD"
        disabled
      />
    )

    const input = await findByPlaceholderText('INPUT FIELD')

    expect(input).toHaveAttribute('disabled')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state', async () => {
    const errorText = 'This field is required'

    const { container, getByText } = render(
      <InputField
        label="INPUT FIELD"
        name="INPUT FIELD"
        error={errorText}
        css={{ m: 'auto', height: 100, width: 100 }}
      />
    )

    await getByText(errorText)

    expect(await axe(container)).toHaveNoViolations()
  })
})
