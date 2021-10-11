import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Label } from '~/components/label'
import { Link } from '~/components/link'
import { ValidationError } from '~/components/validation-error'
import type { CSS } from '~/stitches'

import { Description } from './FieldDescription'

export type FieldWrapperProps = {
  css?: CSS
  error?: string
  fieldId: string
  label: string
  prompt?: { link: string; label: string }
  description?: string
  required?: boolean
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  css,
  children,
  error,
  fieldId,
  label,
  prompt,
  description,
  required
}) => (
  <Box css={css}>
    <Flex
      css={{ justifyContent: 'space-between', alignItems: 'center', mb: '$3' }}
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
    {description && <Description css={{ mb: '$3' }}>{description}</Description>}
    {children}
    {error && <ValidationError css={{ mt: '$2' }}>{error}</ValidationError>}
  </Box>
)

FieldWrapper.displayName = 'FieldWrapper'
