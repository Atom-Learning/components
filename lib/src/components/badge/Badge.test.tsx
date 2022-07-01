import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Badge } from '.'

describe('Badge component', () => {
  it('renders', async () => {
    const { container } = render(<Badge>Some Text</Badge>)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Badge>Some Text</Badge>)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a md size and danger theme', async () => {
    const { container } = render(
      <Badge theme="danger" size="md">
        Some Text
      </Badge>
    )

    expect(container).toMatchSnapshot()
  })
})
