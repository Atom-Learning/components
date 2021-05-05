import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { DatePicker } from '.'

describe("DatePicker component", () => {
  it('renders', async () => {
    const { container } = render(<DatePicker />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<DatePicker />)

    expect(await axe(container)).toHaveNoViolations()
  })
})