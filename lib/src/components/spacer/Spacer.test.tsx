import { render, screen } from '@testing-library/react'
import * as React from 'react'

import { Flex } from '../flex'
import { Text } from '../text'
import { Spacer } from '.'

describe(`Spacer component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Flex css={{ width: '600px' }}>
        <Text>flex item left</Text>
        <Spacer />
        <Text>flex item right</Text>
      </Flex>
    )

    await screen.findByText(/flex item left/i)
    await screen.findByText(/flex item right/i)

    expect(container).toMatchSnapshot()
  })
})
