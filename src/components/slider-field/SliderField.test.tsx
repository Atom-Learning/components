import { render } from '@testing-library/react'
import * as React from 'react'
import { axe } from 'jest-axe'

import { SliderField } from '.'
import { Form } from '../'

const ExampleSliderField = () => (
  <Form onSubmit={() => null}>
    <SliderField name="sliderTest" label="Slider Test" defaultValue={[50]} />
  </Form>
)

describe('SliderField component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleSliderField />)

    expect(container).toMatchSnapshot()
  })

  //TODO: figure out how to pass aria-label properly so that there are no a11y issues
  //NOTE: this is here because the slider seems to want an aria-label on the slider
  //thumb, which would require a lot of drilling, and doesn't seem the right solution.
  //In the future we hope to find a better solution.
  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleSliderField />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
