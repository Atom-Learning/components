import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Text } from '.'

describe(`Text component`, () => {
  it('renders some text', async () => {
    const { container } = render(<Text>TEXT</Text>)

    await screen.getByText('TEXT')

    expect(container).toMatchSnapshot()
  })

  it('renders some text - has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Text>TEXT</Text>)

    expect(await axe(container)).toHaveNoViolations()
  })
})
