import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Label } from '.'

describe(`Label component`, () => {
  it('renders a label', async () => {
    const { container } = render(<Label>TEXT</Label>)

    await screen.getByText('TEXT')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
  it('renders an asterisk if required', async () => {
    const { container } = render(<Label required>TEXT</Label>)

    await screen.getByText('TEXT')

    expect(container).toMatchSnapshot()
  })
})
