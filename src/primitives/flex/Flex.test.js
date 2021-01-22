import { render, screen } from '@testing-library/react'
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
})
