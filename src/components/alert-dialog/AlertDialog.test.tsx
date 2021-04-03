import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { AlertDialog } from '.'

describe("AlertDialog component", () => {
  it('renders', async () => {
    const { container } = render(<AlertDialog />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<AlertDialog />)

    expect(await axe(container)).toHaveNoViolations()
  })
})