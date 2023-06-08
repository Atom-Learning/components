import { render } from '@testing-library/react'
import * as React from 'react'

import { Stack } from '.'
import { Box } from '../box'

describe('Stack component', () => {
  it('renders', async () => {
    const { container } = render(
      <Stack>
        <Box css={{ size: 100, bg: 'red' }} />
        <Box css={{ size: 100, bg: 'red' }} />
        <Box css={{ size: 100, bg: 'red' }} />
      </Stack>
    )

    expect(container).toMatchSnapshot()
  })
})
