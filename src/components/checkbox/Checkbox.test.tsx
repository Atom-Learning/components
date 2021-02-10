import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Checkbox } from '.'

describe(`Checkbox component`, () => {
  it('renders a checkbox', async () => {
    const { container } = render(<Checkbox />)

    await screen.getByRole('checkbox')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
