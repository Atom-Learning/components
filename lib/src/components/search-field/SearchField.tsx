import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FieldElementWrapperProps,
  FieldWrapper
} from '~/components/field-wrapper'
import { useFieldError } from '~/components/form'
import { SearchInput, SearchInputProps } from '~/components/search-input'

type SearchFieldProps = SearchInputProps & FieldElementWrapperProps

export const SearchField = ({
  css,
  hideLabel,
  label,
  name,
  validation,
  prompt,
  description,
  ...remainingProps
}: SearchFieldProps) => {
  const { register } = useFormContext()
  const { error } = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={css}
      description={description}
      error={error}
      fieldId={name}
      hideLabel={hideLabel}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
    >
      <SearchInput
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

SearchField.displayName = 'SearchField'
