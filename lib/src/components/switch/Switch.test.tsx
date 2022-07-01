import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Switch } from '.'

describe(`Switch component`, () => {
  it('renders a switch', async () => {
    const { container } = render(<Switch />)

    expect(container).toMatchSnapshot()
  })

  it('renders a Switch - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <label>
        <Switch title="switch" />
      </label>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a Switch in "on" state', async () => {
    const { container } = render(<Switch checked />)
    expect(container).toMatchSnapshot()
  })

  it('renders a disabled switch', async () => {
    const { container } = render(<Switch disabled />)

    expect(container).toMatchSnapshot()
  })

  it('renders a disabled Switch - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <label>
        <Switch disabled title="switch" />
      </label>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
