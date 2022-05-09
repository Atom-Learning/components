import { IdProvider } from '@radix-ui/react-id'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../'
import { RadioButtonField } from '.'

type ExampleRadioFieldProps = Omit<
  React.ComponentProps<typeof RadioButtonField>,
  'name' | 'label'
>

const ExampleRadioButtonField = (props: ExampleRadioFieldProps) => (
  <IdProvider>
    <Form>
      <RadioButtonField
        name="example"
        defaultValue="1"
        label="Example options"
        {...props}
      >
        <RadioButtonField.Item label="1" value="1" />
        <RadioButtonField.Item label="2" value="2" />
      </RadioButtonField>
    </Form>
  </IdProvider>
)

describe('RadioButtonField component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleRadioButtonField />)

    expect(container).toMatchSnapshot()
  })

  // TODO: figure out how to stop Axe complaining that a button doesn't have text
  // and that an input doesn't have a label
  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleRadioButtonField />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('allows an external on value change handler to be passed to the component', async () => {
    const onValueChangeSpy = jest.fn()
    render(<ExampleRadioButtonField onValueChange={onValueChangeSpy} />)

    const button = await screen.findByLabelText('2')
    fireEvent.click(button)
    await waitFor(() => {
      expect(onValueChangeSpy).toHaveBeenCalledTimes(1)
      expect(onValueChangeSpy).toHaveBeenCalledWith('2')
    })
  })
})
