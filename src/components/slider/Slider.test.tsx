import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Slider } from '.'

describe('Slider component', () => {
  it('renders', async () => {
    const { container } = render(
      <Slider aria-label="label">
        <Slider.Thumb />
      </Slider>
    )

    expect(container).toMatchSnapshot()
  })
})
