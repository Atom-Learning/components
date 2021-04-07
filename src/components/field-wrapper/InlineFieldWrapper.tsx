import * as React from 'react'

import { Box } from '~/components/box'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'
import { CSS } from '~/stitches'

type InlineFieldWrapperProps = {
  css?: CSS
  error?: string
  label: string
  required?: boolean
}

export const InlineFieldWrapper: React.FC<InlineFieldWrapperProps> = ({
  children,
  error,
  css,
  label,
  required
}) => {
  return (
    <Box css={css}>
      <Label
        css={{ display: 'flex', alignItems: 'center' }}
        required={required}
      >
        <Box css={{ mr: '$2' }}>{children}</Box>

        {label}
      </Label>
      {error && <ValidationError css={{ mt: '$1' }}>{error}</ValidationError>}
    </Box>
  )
}

InlineFieldWrapper.displayName = 'InlineFieldWrapper'
