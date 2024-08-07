import * as React from 'react'
import { Override } from '~/utilities/types'

import { styled } from '~/stitches'
import { Input, InputText, InputBackground } from '../input'
import {
  default as PhoneInputWithCountrySelect,
  formatPhoneNumber,
  parsePhoneNumber
} from 'react-phone-number-input'
import phoneInputWithCountrySelectStyles from 'react-phone-number-input/style.css'

const StyledInputBackground = styled(InputBackground, {
  pl: '$2',
  '--PhoneInputCountrySelect-marginRight': 0,
  '--PhoneInput-color--focus': '$colors$primary800',
  '--PhoneInputCountrySelectArrow-color--focus': '$colors$primary800',
  '--PhoneInputCountryFlag-borderColor--focus': '$colors$primary800'
})

export const FALLBACK_COUNTRY = 'GB'

type PhoneInputWithCountrySelectProps = React.ComponentProps<
  typeof PhoneInputWithCountrySelect
>
type InputProps = React.ComponentProps<typeof Input>
type PhoneNumberInputProps = Override<
  InputProps,
  PhoneInputWithCountrySelectProps
> & {
  defaultValue?: PhoneInputWithCountrySelectProps['value']
  placeholder?: PhoneInputWithCountrySelectProps['value']
  state?: InputProps['state']
  size?: InputProps['size']
}

type PhoneNumberInputForwardedRef = React.ForwardedRef<
  React.ComponentRef<typeof PhoneInputWithCountrySelect>
>
export const PhoneNumberInput: React.ForwardRefExoticComponent<PhoneNumberInputProps> =
  React.forwardRef(
    (
      {
        size = 'md',
        placeholder,
        value: valueProps,
        defaultValue: defaultValueProps,
        defaultCountry,
        state,
        disabled,
        onCountryChange: onCountryChangeProps,
        onChange: onChangeProps,
        ...rest
      }: PhoneNumberInputProps,
      ref: PhoneNumberInputForwardedRef
    ) => {
      const parsedValue = valueProps
        ? parsePhoneNumber(valueProps, FALLBACK_COUNTRY)
        : undefined
      const parsedDefaultValue = defaultValueProps
        ? parsePhoneNumber(defaultValueProps, FALLBACK_COUNTRY)
        : undefined
      const parsedPlaceholder = placeholder
        ? parsePhoneNumber(placeholder, FALLBACK_COUNTRY)
        : undefined
      const [selectedCountry, setSelectedCountry] = React.useState(
        parsedValue?.country ||
          parsedDefaultValue?.country ||
          parsedPlaceholder?.country ||
          defaultCountry ||
          FALLBACK_COUNTRY
      )
      const [value, setValue] = React.useState(
        parsedValue?.number || parsedDefaultValue?.number || ''
      )

      React.useEffect(() => {
        if (typeof valueProps === 'undefined') return
        setValue(parsedValue?.number || valueProps || '')
      }, [valueProps, parsedValue?.number])

      React.useEffect(() => {
        const phoneInputWithCountrySelectStyleTagId =
          'phone-number-input-country-select-styles'
        if (document.getElementById(phoneInputWithCountrySelectStyleTagId))
          return // styles' already injected
        document.head.insertAdjacentHTML(
          'beforeend',
          `<style id="${phoneInputWithCountrySelectStyleTagId}">${phoneInputWithCountrySelectStyles}</style>`
        )
      }, [])

      return (
        <StyledInputBackground size={size} state={state} disabled={disabled}>
          <PhoneInputWithCountrySelect
            ref={ref}
            inputComponent={InputText}
            disabled={disabled}
            placeholder={formatPhoneNumber(parsedPlaceholder?.number || '')}
            initialValueFormat="national"
            international={false} // Never show +44Number format. (NOTE/BUG: If the starting value is invalid, this is not respected!)
            size={size}
            {...rest}
            defaultCountry={selectedCountry} // (NOTE: Both defaultCountry and country need to be `selectedCountry` to avoid eratic behaviour of the country select)
            country={selectedCountry}
            onCountryChange={(newSelected) => {
              onCountryChangeProps?.(newSelected)
              if (newSelected) setSelectedCountry(newSelected)
            }}
            value={value}
            onChange={(newValue) => {
              onChangeProps?.(newValue)
              if (newValue) setValue(newValue)
            }}
          />
        </StyledInputBackground>
      )
    }
  )

PhoneNumberInput.displayName = 'PhoneNumberInput'
