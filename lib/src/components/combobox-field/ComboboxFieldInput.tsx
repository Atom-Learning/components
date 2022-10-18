import { ComboboxInput as BaseComboboxInput } from '@reach/combobox'

import { styled, theme } from '~/stitches'
import { encodeBackgroundIcon } from '~/utilities'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import { InputProps } from '~/components/input'
import type { CSS } from '~/stitches'

type ComboboxFieldInputProps = InputProps & {
  css?: CSS
  description?: string
  label: string
  name: string
  prompt?: { link: string; label: string }
  validation?: ValidationOptions
}

const Input = styled(BaseComboboxInput, {
  boxShadow: 'none', // prevent default iOS default styling
  fontSize: '$md', // prevent iOS zooming on focus
  appearance: 'none',
  backgroundImage: encodeBackgroundIcon(theme.colors.tonal300.value, 'chevron'),
  backgroundPosition: 'right $space$3 top 50%, 0 0',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '20px auto, 100%',
  border: '1px solid $tonal300',
  borderRadius: '$0',
  boxSizing: 'border-box',
  color: '$tonal600',
  cursor: 'text',
  display: 'block',
  fontFamily: '$body',
  height: '$4',
  pl: '$3',
  pr: '$6',
  transition: 'all 100ms ease-out',
  width: '100%',
  '&::placeholder': {
    color: '$tonal300',
    opacity: 1
  },
  '&:focus-within': {
    borderColor: '$primary',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$tonal100',
    color: '$tonal400',
    cursor: 'not-allowed'
  },
  variants: {
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})

export const ComboboxFieldInput = (
  props: React.ComponentProps<typeof BaseComboboxInput> & ComboboxFieldInputProps
) => {
  const {
    css,
    label,
    name,
    validation,
    prompt,
    description,
    ...rest
  } = props
  const { register } = useFormContext()
  const { error } = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={css}
      description={description}
      error={error}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
    >
      <Input
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...rest}
      />
    </FieldWrapper>
  )
}

 