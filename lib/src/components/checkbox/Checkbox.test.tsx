import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Checkbox } from '.'

const CheckboxImplementation = () => {
  return <Checkbox title="test" />
}

describe(`Checkbox component`, () => {
  it('renders a checkbox', async () => {
    const { container } = render(<CheckboxImplementation />)

    await screen.getByRole('checkbox')

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<CheckboxImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
