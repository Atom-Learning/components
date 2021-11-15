import { render } from '@testing-library/react'
import * as React from 'react'

import { Slider } from '.'

describe('Slider component', () => {
  it('renders', async () => {
    const { container } = render(
      <Slider aria-label="label" defaultValue={[50]} />
    )

    expect(container).toMatchSnapshot()
  })
})
