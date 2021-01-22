import 'jest-axe/extend-expect' // TODO: refactor into the setupFiles.js

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'
import ReactDOMServer from 'react-dom/server' // TODO: refactor into the setupFiles.js

import { Grid } from '.'

describe(`Grid component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Grid css={{ m: 'auto', height: 100, width: 100 }}>GRID</Grid>
    )
    await screen.findByText('GRID')
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const html = ReactDOMServer.renderToString(<Grid />)
    const results = await axe(html)
    expect(results).toHaveNoViolations()
  })
})
