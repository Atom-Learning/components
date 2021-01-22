import { render, screen } from '@testing-library/react'
import React from 'react'

import { Grid } from '.'

describe(`Grid component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Grid css={{ m: 'auto', height: 100, width: 100 }}>GRID</Grid>
    )
    await screen.findByText('GRID')
    expect(container).toMatchSnapshot()
  })
})
