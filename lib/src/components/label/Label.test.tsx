import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Label } from '.'

describe(`Label component`, () => {
  it('renders a label', async () => {
    const { container } = render(<Label>TEXT</Label>)

    await screen.getByText('TEXT')

    expect(container).toMatchSnapshot()
  })
  it('renders an inline label', async () => {
    const { container } = render(
      <Label type="inline" align="center">
        TEXT
      </Label>
    )

    await screen.getByText('TEXT')

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Label>TEXT</Label>)

    expect(await axe(container)).toHaveNoViolations()
  })
})
