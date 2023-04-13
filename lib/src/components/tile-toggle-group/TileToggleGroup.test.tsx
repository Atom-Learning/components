import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { TileToggleGroup } from '.'

const TileToggleGroupImplementation = () => (
  <TileToggleGroup
    type="multiple"
    defaultValue={['a', 'b']}
    onValueChange={(value) => {
      console.log(value)
    }}
  >
    <TileToggleGroup.Item value="a">A</TileToggleGroup.Item>
    <TileToggleGroup.Item value="b" disabled>
      B
    </TileToggleGroup.Item>
    <TileToggleGroup.Item value="c">C</TileToggleGroup.Item>
    <TileToggleGroup.Item value="d" disabled>
      D
    </TileToggleGroup.Item>
  </TileToggleGroup>
)

describe('TileToggleGroup component', () => {
  it('renders', async () => {
    const { container } = render(<TileToggleGroupImplementation />)
    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<TileToggleGroupImplementation />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
