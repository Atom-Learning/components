import { render, screen } from '@testing-library/react'
import React from 'react'

import { InputField } from '.'

describe(`Input component`, () => {
  it('renders', async () => {
    const { container } = render(
      <InputField
        css={{ m: 'auto', height: 100, width: 100 }}
        label="InputField"
        name="example"
      />
    )
    await screen.findByLabelText('InputField')
    expect(container).toMatchSnapshot()
  })
})
