import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'
import { formatPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'

import { Form } from '../form'
import { PhoneNumberField } from '.'

const phoneNumber = '+81635253163'
const processPhoneNumberForDisplay = (pn) =>
  formatPhoneNumber(parsePhoneNumber(pn, 'GB')?.number || '')
const formattedPhoneNumber = processPhoneNumberForDisplay(phoneNumber)

describe(`PhoneNumberField component`, () => {
  it('renders', async () => {
    const { container } = render(
      <Form>
        <PhoneNumberField
          label="PHONE NUMBER FIELD"
          name="PHONE NUMBER FIELD"
          css={{ m: 'auto', height: 100, width: 100 }}
          placeholder={phoneNumber}
        />
      </Form>
    )

    await screen.getByPlaceholderText(formattedPhoneNumber)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Form>
        <PhoneNumberField
          label="PHONE NUMBER FIELD"
          name="PHONE NUMBER FIELD"
          placeholder={phoneNumber}
        />
      </Form>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field with a disabled input', async () => {
    const { container } = render(
      <Form>
        <PhoneNumberField
          label="PHONE NUMBER FIELD"
          name="PHONE NUMBER FIELD"
          placeholder={phoneNumber}
          disabled
        />
      </Form>
    )

    const inputEl = await screen.getByPlaceholderText(formattedPhoneNumber)
    expect(inputEl).toHaveAttribute('disabled')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders a field in error state', async () => {
    const errorTextRequired = 'This field is required'
    const errorTextValidationFailed = 'Phone number is invalid'

    const { container } = render(
      <Form>
        <PhoneNumberField
          label="PHONE NUMBER FIELD"
          name="PHONE NUMBER FIELD"
          validation={{ required: errorTextRequired }}
          copy={{
            validation_invalid_phone_number: errorTextValidationFailed
          }}
        />
        <button type="submit">Submit</button>
      </Form>
    )
    const submitButton = screen.getByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)
    await screen.findByText(errorTextRequired)

    const inputEl = await screen.getByRole('textbox')
    userEvent.type(inputEl, '123')
    userEvent.click(submitButton)
    await screen.findByText(errorTextValidationFailed)

    expect(container).toMatchSnapshot()
  })
})
