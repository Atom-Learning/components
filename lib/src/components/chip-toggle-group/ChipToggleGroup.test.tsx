import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ChipToggleGroup } from '.'

const ChipToggleGroupImplementation = () => (
  <ChipToggleGroup
    type="multiple"
    defaultValue={['a', 'b']}
    onValueChange={(value) => {
      console.log(value)
    }}
  >
    <ChipToggleGroup.Item value="a">A</ChipToggleGroup.Item>
    <ChipToggleGroup.Item value="b" disabled>
      B
    </ChipToggleGroup.Item>
    <ChipToggleGroup.Item value="c">C</ChipToggleGroup.Item>
    <ChipToggleGroup.Item value="d" disabled>
      D
    </ChipToggleGroup.Item>
  </ChipToggleGroup>
)

describe('ChipToggleGroup component', () => {
  it('renders', async () => {
    const { container } = render(<ChipToggleGroupImplementation />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ChipToggleGroupImplementation />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
