import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { DateInput } from '.'

describe("DateInput component", () => {
  it('renders', async () => {
    const { container } = render(<DateInput />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<DateInput />)

    expect(await axe(container)).toHaveNoViolations()
  })
})