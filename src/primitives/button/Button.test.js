import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Button } from '.'

describe(`Button component`, () => {
  it('renders a button', async () => {
    const { container } = render(<Button css={{ width: 100 }}>BUTTON</Button>)

    await screen.getByText('BUTTON')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(<Button>Button</Button>, document.body)

    const results = await axe(document.body.firstChild)
    expect(results).toHaveNoViolations()
  })
})
