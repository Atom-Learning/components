import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { ValidationOptions } from '~/components/form'
import { InlineMessage } from '~/components/inline-message'
import { InlineMessageTheme } from '../inline-message/InlineMessage.types'
import { Label } from '~/components/label'
import { Link } from '~/components/link'
import type { CSS } from '~/stitches'
import { FieldFeedback } from './FieldFeedback'
import { Description } from './FieldDescription'
import { Stack } from '../stack'

export type FieldWrapperProps = {
  css?: CSS
  fieldId: string
  label: string
  prompt?: { link: string; label: string }
  description?: string
  required?: boolean
  hideLabel?: boolean
  feedbackDirection?: 'column' | 'row'
  criteriaMode?: 'firstError' | 'all'
}

export type FieldElementWrapperProps = Omit<
  FieldWrapperProps,
  'fieldId' | 'criteriaMode'
> & {
  name: string
  validation?: ValidationOptions
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  css,
  children,
  fieldId,
  label,
  prompt,
  description,
  required,
  hideLabel,
  feedbackDirection = 'column',
  criteriaMode = 'firstError'
}) => {
  const LabelContainer = hideLabel ? VisuallyHidden.Root : Flex

  return (
    <Box css={css}>
      <LabelContainer
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
      </LabelContainer>
      {description && (
        <Description css={{ mb: '$3' }}>{description}</Description>
      )}
      {children}
      <FieldFeedback
        fieldName={fieldId}
        direction={feedbackDirection}
        css={{ mt: '$3' }}
        validationMode={criteriaMode}
      />
    </Box>
  )
}

FieldWrapper.displayName = 'FieldWrapper'
