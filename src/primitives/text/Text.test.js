import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Text } from '.'

describe(`Text component`, () => {
  it('renders some text', async () => {
    const { container } = render(<Text>TEXT</Text>)

    await screen.getByText('TEXT')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(
      <main>
        <Text>TEXT</Text>
      </main>,
      document.body
    )

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
