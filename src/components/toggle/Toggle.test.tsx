import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Toggle } from '.'

describe(`Toggle component`, () => {
  it('renders a toggle switch', async () => {
    const { container } = render(<Toggle />)

    expect(container).toMatchSnapshot()
  })

  it('renders a toggle - has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Toggle aria-label="toggle" />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a toggle switch', async () => {
    const { container } = render(<Toggle disabled />)

    expect(container).toMatchSnapshot()
  })

  it('renders a disabled toggle - has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Toggle disabled aria-label="toggle" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
