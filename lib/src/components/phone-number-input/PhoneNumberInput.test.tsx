import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { formatPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'

import { PhoneNumberInput } from '.'
import { Button } from '../button'

const phoneNumber = '01202428769'
const processPhoneNumberForDisplay = (pn) =>
  formatPhoneNumber(parsePhoneNumber(pn, 'GB')?.number || '')
const formattedPhoneNumber = processPhoneNumberForDisplay(phoneNumber)

type StatefulImplementationProps = React.ComponentProps<
  typeof PhoneNumberInput
> & {
  afterClickValue: React.ComponentProps<typeof PhoneNumberInput>['value']
  afterClickDefaultValue: React.ComponentProps<
    typeof PhoneNumberInput
  >['defaultValue']
}
const StatefulImplementation = ({
  value: valueProps,
  defaultValue: defaultValueProps,
  afterClickValue,
  afterClickDefaultValue,
  ...rest
}: StatefulImplementationProps) => {
  const [value, setValue] = React.useState(valueProps)
  const [defaultValue, setDefaultValue] = React.useState(defaultValueProps)
  return (
    <>
      <PhoneNumberInput value={value} defaultValue={defaultValue} {...rest} />
      <Button
        data-testId="update-state-button"
        onClick={() => {
          setValue(afterClickValue)
          setDefaultValue(afterClickDefaultValue)
        }}
      />
    </>
  )
}

describe(`PhoneNumberInput component`, () => {
  it('renders', async () => {
    const { container } = render(<PhoneNumberInput placeholder={phoneNumber} />)

    await screen.getByPlaceholderText(formattedPhoneNumber)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<PhoneNumberInput placeholder={phoneNumber} />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('treats setting defaultValue as other Input components do', async () => {
    // This test exists because we are doing custom handling of defaultValue as the extended component does not support it correctly.
    const beforeClickPhoneNumber = formattedPhoneNumber
    const afterClickPhoneNumber = '01202428767'
    render(
      <StatefulImplementation
        defaultValue={phoneNumber}
        afterClickDefaultValue={afterClickPhoneNumber}
      />
    )

    const inputEl = await screen.getByDisplayValue(beforeClickPhoneNumber)
    await screen.getByTestId('update-state-button').click()

    await waitFor(() => {
      // Changing default value after initialisation correctly does NOTHING
      expect(inputEl).not.toHaveValue(
        processPhoneNumberForDisplay(afterClickPhoneNumber)
      )
      expect(inputEl).toHaveValue(
        processPhoneNumberForDisplay(beforeClickPhoneNumber)
      )
    })
  })

  it('treats setting value as other Input components do', async () => {
    // This test exists because we are doing custom handling of value as the extended component does not support it correctly.
    const beforeClickPhoneNumber = formattedPhoneNumber
    const afterClickPhoneNumber = '+302106725669'
    render(
      <StatefulImplementation
        value={phoneNumber}
        afterClickValue={afterClickPhoneNumber}
      />
    )

    const inputEl = await screen.getByDisplayValue(beforeClickPhoneNumber)
    await screen.getByTestId('update-state-button').click()

    await waitFor(() => {
      // Changing value after initialisation correctly updates the field value
      expect(inputEl).not.toHaveValue(
        processPhoneNumberForDisplay(beforeClickPhoneNumber)
      )
      expect(inputEl).toHaveValue(
        processPhoneNumberForDisplay(afterClickPhoneNumber)
      )
    })
  })
})
