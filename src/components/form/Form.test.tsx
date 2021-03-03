import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '.'

describe(`Form component`, () => {
  it('renders a form', async () => {
    const { container } = render(<Form />)

    await screen.getByRole('form')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
