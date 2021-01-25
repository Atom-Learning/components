import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

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
    const html = ReactDOMServer.renderToString(<Box />)
    const results = await axe(html)
    expect(results).toHaveNoViolations()
  })
})
