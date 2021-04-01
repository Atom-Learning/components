import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { RadioField } from '.'

describe("RadioField component", () => {
  it('renders', async () => {
    const { container } = render(<RadioField />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<RadioField />)

    expect(await axe(container)).toHaveNoViolations()
  })
})