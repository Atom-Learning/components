import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Combobox } from '.'

describe("Combobox component", () => {
  it('renders', async () => {
    const { container } = render(<Combobox />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Combobox />)

    expect(await axe(container)).toHaveNoViolations()
  })
})