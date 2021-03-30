import * as React from 'react'

import { Box } from '~/components/box'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'
import { CSS } from '~/stitches'

type FieldWrapperProps = {
  css?: CSS
  error?: string
  htmlFor: string
  label: string
  required?: boolean
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  css,
  children,
  error,
  htmlFor,
  label,
  required
}) => {
  return (
    <Box css={css}>
      <Label required={required} htmlFor={htmlFor} css={{ mb: '$2' }}>
        {label}
      </Label>
      {children}
      {error && <ValidationError css={{ mt: '$1' }}>{error}</ValidationError>}
    </Box>
  )
}

FieldWrapper.displayName = 'FieldWrapper'
