import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Input } from '.'

describe(`Input component`, () => {
  it('renders a text input', async () => {
    const { container } = render(
      <Input css={{ m: 'auto', height: 100, width: 100 }} placeholder="INPUT" />
    )

    await screen.getByPlaceholderText('INPUT')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a number input', async () => {
    const { container, findByPlaceholderText } = render(
      <Input
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

  it('renders a disabled input', async () => {
    const { container, findByPlaceholderText } = render(
      <Input
        css={{ m: 'auto', height: 100, width: 100 }}
        placeholder="INPUT"
        disabled
      />
    )

    const input = await findByPlaceholderText('INPUT')

    expect(input).toHaveAttribute('disabled')
    expect(await axe(container)).toHaveNoViolations()
  })
})
