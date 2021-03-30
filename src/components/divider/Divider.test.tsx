import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Divider } from '.'

describe('Divider component', () => {
  it('renders', async () => {
    const { container } = render(<Divider />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Divider />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
