import { render, screen } from '@testing-library/react'
import React from 'react'

import { PasswordField } from '.'

describe(`PasswordField component`, () => {
  it('renders', async () => {
    const { container } = render(
      <PasswordField css={{ m: 'auto', height: 100, width: 100 }} name="pass" />
    )
    await screen.findByLabelText('Password')
    expect(container).toMatchSnapshot()
  })
})
