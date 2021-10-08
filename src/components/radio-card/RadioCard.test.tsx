import { render } from '@testing-library/react'
import React from 'react'

import { RadioCard, RadioCardGroup } from './'

describe('RadioCardGroup component', () => {
  it('renders an RadioCardGroup with RadioCards', async () => {
    const { container } = await render(
      <RadioCardGroup defaultValue="2">
        <RadioCard value="1">First item</RadioCard>
        <RadioCard value="2">Second item</RadioCard>
      </RadioCardGroup>
    )

    expect(container).toMatchSnapshot()
  })
})
