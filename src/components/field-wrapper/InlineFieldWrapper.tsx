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
  reverse?: boolean
}

export const InlineFieldWrapper: React.FC<InlineFieldWrapperProps> = ({
  children,
  error,
  css,
  label,
  required,
  reverse
}) => (
  <Box css={css}>
    <Label
      css={{
        alignItems: 'baseline',
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        fontWeight: 500,
        maxWidth: 'max-content'
      }}
      required={required}
    >
      <Box
        css={{
          [reverse ? 'ml' : 'mr']: '$3',
          transform: 'translateY($space$0)'
        }}
      >
        {children}
      </Box>
      {label}
    </Label>
    {error && <ValidationError css={{ mt: '$1' }}>{error}</ValidationError>}
  </Box>
)

InlineFieldWrapper.displayName = 'InlineFieldWrapper'
