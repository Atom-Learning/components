import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Divider } from '.'

describe('Divider component', () => {
  it('renders horizontal divider', async () => {
    const { container } = render(<Divider orientation="horizontal" />)

    expect(container).toMatchSnapshot()
  })

  it('renders vertical divider', async () => {
    const { container } = render(<Divider orientation="vertical" />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Divider />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
