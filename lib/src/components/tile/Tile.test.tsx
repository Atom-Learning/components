import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Tile, TileGroup } from '.'

const TileImplementation = () => (
  <TileGroup gap="3">
    <Tile css={{ size: 100 }} />
    <Tile css={{ size: 100 }} />
  </TileGroup>
)

describe(`Tile component`, () => {
  it('renders', async () => {
    const { container } = render(<TileImplementation />)
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<TileImplementation />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
