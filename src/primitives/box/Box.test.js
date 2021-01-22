import 'jest-axe/extend-expect'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
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

  it('should ensure that Box component doesn`t have any accessibility violations', async () => {
    // TODO: fix why this test is passing
    const { container } = render(<Box css={{ color: 'pink' }} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
