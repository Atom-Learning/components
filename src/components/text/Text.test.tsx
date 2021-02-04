import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Text } from '.'

describe(`Text component`, () => {
  it('renders some text', async () => {
    const { container } = render(<Text>TEXT</Text>)

    await screen.getByPlaceholderText('TEXT')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
