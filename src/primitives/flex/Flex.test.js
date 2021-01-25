import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Flex } from '.'

describe(`Flex component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Flex css={{ m: 'auto', height: 100, width: 100 }}>FLEX</Flex>
    )
    await screen.findByText('FLEX')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(<Flex />, document.body)

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
