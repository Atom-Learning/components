import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Box } from '../'
import { Grid } from '.'

describe(`Grid component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Grid
        gap="0.05em"
        basis="0.5em"
        css={{ m: 'auto', height: 100, width: 100 }}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Grid>
    )
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    render(
      <Grid
        as="main"
        gap="0.05em"
        basis="0.5em"
        css={{ m: 'auto', height: 100, width: 100 }}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Grid>
    )

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
