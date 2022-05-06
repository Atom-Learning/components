import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { EmptyStates } from '.'

describe('EmptyStates component', () => {
  it('renders', async () => {
    const { container } = render(<EmptyStates />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<EmptyStates />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
