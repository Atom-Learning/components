import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Flex } from '~/components/flex'
import { ValidationOptions } from '~/components/form'
import { InlineMessage } from '~/components/inline-message'
import { Label } from '~/components/label'
import { Link } from '~/components/link'
import type { CSS } from '~/stitches'

import { Description } from './FieldDescription'

export type FieldWrapperProps = {
  css?: CSS
  error?: string
  fieldId: string
  label: string
  prompt?: { link?: string; label: string; onClick?: () => void }
  description?: string
  required?: boolean
  hideLabel?: boolean
}

export type FieldElementWrapperProps = Omit<FieldWrapperProps, 'fieldId'> & {
  name: string
  validation?: ValidationOptions
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  css,
  children,
  error,
  fieldId,
  label,
  prompt,
  description,
  required,
  hideLabel
}) => {
  const LabelContainer = hideLabel ? VisuallyHidden.Root : Flex

  return (
    <Flex direction="column" gap="3" css={css}>
      <LabelContainer justify="space-between" align="center">
        <Label htmlFor={fieldId} required={required}>
          {label}
        </Label>
        {prompt && (
          <Link href={prompt?.link} onClick={prompt?.onClick} size="sm">
            {prompt.label}
          </Link>
        )}
      </LabelContainer>
      {description && <Description>{description}</Description>}
      {children}
      {error && <InlineMessage>{error}</InlineMessage>}
    </Flex>
  )
}

FieldWrapper.displayName = 'FieldWrapper'
