import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Textarea } from '.'

describe(`Textarea component`, () => {
  it('renders a textarea', async () => {
    const { container } = render(
      <Textarea
        css={{ m: 'auto', height: 100, width: 100 }}
        placeholder="DESCRIPTION"
      />
    )

    await screen.getByPlaceholderText('DESCRIPTION')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a disabled textarea', async () => {
    const { container, findByPlaceholderText } = render(
      <Textarea
        css={{ m: 'auto', height: 100, width: 100 }}
        placeholder="DESCRIPTION"
        disabled
      />
    )

    const input = await findByPlaceholderText('DESCRIPTION')

    expect(input).toHaveAttribute('disabled')
    expect(await axe(container)).toHaveNoViolations()
  })
})
