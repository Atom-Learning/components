import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Calendar } from '.'

describe('Calendar component', () => {
  it('renders', async () => {
    const { container } = render(<Calendar />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Calendar />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
