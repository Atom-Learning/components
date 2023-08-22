import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Box } from '~/components/box'
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
          <Link
            onClick={prompt?.onClick}
            size="sm"
            asChild={!prompt?.link}
            href={prompt.link}
          >
            {!prompt?.link ? <button>{prompt.label}</button> : prompt.label}
          </Link>
        )}
      </LabelContainer>
      {description && (
        <Description css={{ mb: '$3' }}>{description}</Description>
      )}
      {children}
      {error && <InlineMessage css={{ mt: '$2' }}>{error}</InlineMessage>}
    </Box>
  )
}

FieldWrapper.displayName = 'FieldWrapper'
