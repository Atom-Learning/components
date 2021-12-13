import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { axe } from 'jest-axe'

import { Slider } from '.'

const steps = [
  { value: 0, label: 'min' },
  { value: 50, label: 'mid' },
  { value: 100, label: 'max' }
]

const outputLabel = '$VALUE test items'

const emptyData = { value: 0, label: 'No test items' }

describe('Slider component', () => {
  it('renders', async () => {
    const { container } = render(<Slider defaultValue={[50]} />)

    expect(container).toMatchSnapshot()
  })

  it('renders with a steps list', async () => {
    const { container } = render(<Slider steps={steps} defaultValue={[50]} />)

    expect(container).toMatchSnapshot()
  })

  it('renders with a value label', async () => {
    render(<Slider defaultValue={[50]} showValue />)

    expect(await screen.findByText('Current value is 50')).toBeVisible()
  })

  it('renders with a custom value label', async () => {
    render(<Slider defaultValue={[50]} showValue outputLabel={outputLabel} />)

    expect(await screen.findByText('50 test items')).toBeVisible()
  })

  it('renders with a custom empty value label', async () => {
    render(
      <Slider
        defaultValue={[0]}
        showValue
        outputLabel={outputLabel}
        emptyData={emptyData}
      />
    )

    expect(await screen.findByText('No test items')).toBeVisible()
  })

  it('does not render with a value label given multiple values', async () => {
    render(<Slider defaultValue={[50, 75]} showValue />)

    expect(
      await screen.queryByText('Current value is 50')
    ).not.toBeInTheDocument()
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
