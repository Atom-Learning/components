import { IdProvider } from '@radix-ui/react-id'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { RadioGroupField } from '.'

const ExampleRadioField = () => (
  <IdProvider>
    <Form onSubmit={() => null}>
      <RadioGroupField name="example" defaultValue="1" label="Example options">
        <RadioGroupField.Item label="1" value="1" />
        <RadioGroupField.Item label="2" value="2" />
      </RadioGroupField>
    </Form>
  </IdProvider>
)

describe('RadioField component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleRadioField />)

    expect(container).toMatchSnapshot()
  })

  // TODO: figure out how to stop Axe complaining that a button doesn't have text
  // and that an input doesn't have a label
  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleRadioField />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
