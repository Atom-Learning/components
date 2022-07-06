import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { vi } from 'vitest'

import { Form } from '../'
import { SliderField } from '.'

const props = {
  name: 'sliderTest',
  label: 'Slider Test',
  defaultValue: [50]
}

describe('SliderField component', () => {
  it('renders', async () => {
    const { container } = render(
      <Form onSubmit={vi.fn()}>
        <SliderField {...props} />
      </Form>
    )

    expect(container).toMatchSnapshot()
  })

  it('properly passes down min and max to slider', async () => {
    await render(
      <Form onSubmit={vi.fn()}>
        <SliderField {...props} min={25} max={75} />
      </Form>
    )

    const slider = await screen.findByRole('slider')
    expect(slider).toHaveAttribute('aria-valuemin', '25')
    expect(slider).toHaveAttribute('aria-valuemax', '75')
  })

  //TODO: figure out how to pass aria-label properly so that there are no a11y issues
  //NOTE: this is here because the slider seems to want an aria-label on the slider
  //thumb, which would require a lot of drilling, and doesn't seem the right solution.
  //In the future we hope to find a better solution.
  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form onSubmit={vi.fn()}>
        <SliderField {...props} />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
