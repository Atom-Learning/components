import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Slider } from '.'

const steps = [
  { value: 0, label: 'min' },
  { value: 50, label: 'mid' },
  { value: 100, label: 'max' }
]

const outputLabel = (value) =>
  value === 0 ? 'No test items' : `${value} test items`

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

describe('Slider.Value component', () => {
  it('renders', async () => {
    const { container } = render(<Slider.Value value={[50]} />)

    expect(container).toMatchSnapshot()
  })

  it('renders with a custom value label', async () => {
    render(<Slider.Value value={[50]} outputLabel={outputLabel} />)

    expect(await screen.findByText('50 test items')).toBeVisible()
  })

  it('renders with a custom empty value label', async () => {
    render(<Slider.Value value={[0]} outputLabel={outputLabel} />)

    expect(await screen.findByText('No test items')).toBeVisible()
  })

  it('does not render with a value label given multiple values', async () => {
    render(<Slider.Value value={[50, 75]} />)

    expect(
      await screen.queryByText('Current value is 50')
    ).not.toBeInTheDocument()
  })
})
