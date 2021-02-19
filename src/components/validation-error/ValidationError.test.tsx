import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ValidationError } from '.'

describe(`ValidationError component`, () => {
  it('renders a validation error', async () => {
    const { container } = render(
      <ValidationError>VALIDATION ERROR</ValidationError>
    )

    await screen.getByText('VALIDATION ERROR')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
