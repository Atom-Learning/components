import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FieldWrapper,
  FieldElementWrapperProps
} from '~/components/field-wrapper'
import { useFieldError } from '~/components/form'
import { SearchInput, SearchInputProps } from '~/components/search-input'

type SearchFieldProps = SearchInputProps & FieldElementWrapperProps

export const SearchField: React.FC<SearchFieldProps> = ({
  css,
  label,
  name,
  validation,
  prompt,
  description,
  feedbackMode,
  ...remainingProps
}) => {
  const { register } = useFormContext()
  const { error } = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={css}
      description={description}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
      feedbackMode={feedbackMode}
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
