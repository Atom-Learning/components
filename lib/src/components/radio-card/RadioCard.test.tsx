import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
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

  it('renders a radio button - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <label>
        Label
        <RadioCardGroup defaultValue="2">
          <RadioCard value="1">First item</RadioCard>
          <RadioCard value="2">Second item</RadioCard>
        </RadioCardGroup>
      </label>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
