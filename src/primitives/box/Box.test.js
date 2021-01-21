import { render, screen } from '@testing-library/react'
import React from 'react'

import { Box } from './'

describe(`Box component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Box css={{ m: 'auto', height: 100, width: 100 }}>BOX_CHILDREN</Box>
    )
    await screen.findByText('BOX_CHILDREN')
    expect(container).toMatchSnapshot()
  })
})
