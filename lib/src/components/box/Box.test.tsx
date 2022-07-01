import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Box } from './'

describe(`Box component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Box css={{ m: 'auto', height: 100, width: 100 }}>BOX</Box>
    )
    await screen.findByText('BOX')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(<Box />)

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
