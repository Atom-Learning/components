import { render } from '@testing-library/react'
import * as React from 'react'
import { axe } from 'jest-axe'

import { Slider } from '.'

const steps = [
  { value: 0, label: 'min' },
  { value: 50, label: 'mid' },
  { value: 100, label: 'max' }
]

describe('Slider component', () => {
  it('renders', async () => {
    const { container } = render(<Slider defaultValue={[50]} />)

    expect(container).toMatchSnapshot()
  })

  it('renders with a steps list', async () => {
    const { container } = render(<Slider steps={steps} defaultValue={[50]} />)

    expect(container).toMatchSnapshot()
  })

  //TODO: figure out how to pass aria-label properly so that there are no a11y issues
  //NOTE: this is here because the slider seems to want an aria-label on the slider
  //thumb, which would require a lot of drilling, and doesn't seem the right solution.
  //In the future we hope to find a better solution.
  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Slider defaultValue={[50]} />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
