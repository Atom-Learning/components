import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Form } from '../form'
import { NumberInputField } from '.'
import type { NumberInputFieldProps } from './NumberInputField'

const renderComponent = (props: Partial<NumberInputFieldProps> = {}) => {
  return render(
    <Form onSubmit={() => console.log('Form submitted')}>
      <NumberInputField
        name="numberInputField"
        label="Number Input"
        {...props}
      />
      <button type="submit">Submit</button>
    </Form>
  )
}

describe(`NumberInputField component`, () => {
  it('renders a field with a number input - has no programmatically detectable a11y issues', async () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input - has no programmatically detectable a11y issues', async () => {
    const { container, getByRole } = renderComponent({ isDisabled: true })

    const input = getByRole('spinbutton')

    expect(container).toMatchSnapshot()
    expect(input).toHaveAttribute('disabled')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state - has no programmatically detectable a11y issues', async () => {
    const errorText = 'Cannot enter values less than 7'

    const { container, findByText, getByRole } = renderComponent({
      validation: { min: { value: 7, message: errorText } }
    })

    userEvent.click(getByRole('button'))
    await findByText(errorText)

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
