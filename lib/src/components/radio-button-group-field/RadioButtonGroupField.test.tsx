import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '..'

import { RadioButtonGroupFormField } from './RadioButtonGroupFormField'

type ExampleRadioButtonGroupFieldItemProps = Omit<
  React.ComponentProps<typeof RadioButtonGroupFormField>,
  'name' | 'label'
>

const ExampleRadioButtonGroupField = (props: ExampleRadioButtonGroupFieldItemProps) => (
  <Form onSubmit={() => { }}>
    <RadioButtonGroupFormField
      name="example"
      defaultValue="1"
      label="Example options"
      {...props}
    >
      <RadioButtonGroupFormField.Item label="1" value="1" />
      <RadioButtonGroupFormField.Item label="2" value="2" />
    </RadioButtonGroupFormField>
  </Form>
)

describe('RadioButtonGroupField component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleRadioButtonGroupField />)

    expect(container).toMatchSnapshot()
  })

  // TODO: figure out how to stop Axe complaining that a button doesn't have text
  // and that an input doesn't have a label
  it.skip('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<ExampleRadioButtonGroupField />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('allows an external on value change handler to be passed to the component', async () => {
    const onValueChangeSpy = jest.fn()
    render(<ExampleRadioButtonGroupField onValueChange={onValueChangeSpy} />)

    userEvent.click(screen.getByLabelText('2'))
    await waitFor(() => {
      expect(onValueChangeSpy).toHaveBeenCalledTimes(1)
      expect(onValueChangeSpy).toHaveBeenCalledWith('2')
    })
  })
})
