import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Toast } from '.'

describe.skip('Toast component', () => {
  it('renders', async () => {
    const message = 'This is an info message'
    const { container } = render(<Toast />)

    expect(await screen.findByText(message)).not.toBeInTheDocument()

    // expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Toast />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
