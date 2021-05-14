import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Label } from '~/components/label'
import { Link } from '~/components/link'
import { ValidationError } from '~/components/validation-error'
import { CSS } from '~/stitches'

export type FieldWrapperProps = {
  css?: CSS
  error?: string
  fieldId: string
  label: string
  prompt?: { link: string; label: string }
  required?: boolean
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  css,
  children,
  error,
  fieldId,
  label,
  prompt,
  required
}) => {
  return (
    <Box css={css}>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '$3'
        }}
      >
        <Label htmlFor={fieldId} required={required}>
          {label}
        </Label>
        {prompt && (
          <Link href={prompt.link} size="sm">
            {prompt.label}
          </Link>
        )}
      </Flex>
      {children}
      {error && <ValidationError css={{ mt: '$1' }}>{error}</ValidationError>}
    </Box>
  )
}

FieldWrapper.displayName = 'FieldWrapper'
