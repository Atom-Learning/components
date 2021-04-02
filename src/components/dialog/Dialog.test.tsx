import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Dialog } from '.'

describe('Dialog component', () => {
  it('renders', async () => {
    const { container } = render(<Dialog />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Dialog />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
