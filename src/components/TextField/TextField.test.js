import { render, screen } from '@testing-library/react'
import React from 'react'

import { TextField } from '.'

describe(`Input component`, () => {
  it('renders', async () => {
    const { container } = render(
      <TextField
        css={{ m: 'auto', height: 100, width: 100 }}
        placeholder="TextField"
      />
    )
    await screen.findByPlaceholderText('TextField')
    expect(container).toMatchSnapshot()
  })
})
