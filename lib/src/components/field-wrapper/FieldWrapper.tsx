import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import { Box } from '~/components/box'
import { Stack } from '~/components/stack'
import { Flex } from '~/components/flex'
import { InlineMessage } from '~/components/inline-message'
import type { TInlineMessage } from '~/components/inline-message'
import { Label } from '~/components/label'
import { Link } from '~/components/link'

import { Description } from './FieldDescription'
import { FieldWrapperProvider } from './FieldWrapperContext'
import { styled } from '~/stitches'

export type TFieldWrapperProps = {
  name: string
  label: React.ReactNode
  required?: boolean
  description?: string
  feedback?: (TInlineMessage & { message: React.ReactText })[]
  hideLabel?: boolean,
  prompt?: { link?: string; label: React.ReactNode; onClick?: () => void },
  type?: 'field' | 'fieldset'
  children?: React.ReactNode
}

const Fieldset = styled('fieldset', { all: 'unset' })

export const FieldWrapper = React.forwardRef<HTMLElement, TFieldWrapperProps>(({
  children,
  type = 'field',
  name,
  label,
  prompt,
  required,
  feedback,
  description,
  hideLabel,
  ...rest
}, ref) => {
  const LabelContainer = hideLabel ? VisuallyHidden.Root : Flex
  const FieldContainer = (type === 'fieldset' ? Fieldset : Box) as React.ElementType

  return (
    <FieldWrapperProvider name={name} feedback={feedback} >
      <FieldContainer ref={ref} {...rest}>
        <LabelContainer
          css={{
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '$3'
          }}
        >
          <Label htmlFor={name} required={required} type='block' as={type === 'fieldset' ? 'legend' : 'label'}>
            {label}
          </Label>
          {prompt && (
            <Link href={prompt?.link} onClick={prompt?.onClick} size="sm" css={{ ml: '$2' }}>
              {prompt.label}
            </Link>
          )}
        </LabelContainer>
        {description && (
          <Description css={{ mb: '$3' }}>{description}</Description>
        )}
        {children}
        {!!feedback?.length && (
          <Stack css={{ mt: '$2' }} gap={3}>
            {feedback.map((f) => <InlineMessage theme={f.theme} key={`${f.theme} ${f.message}`}>{f.message}</InlineMessage>)}
          </Stack>
        )}
      </FieldContainer>
    </FieldWrapperProvider>
  )
})

FieldWrapper.displayName = 'FieldWrapper'
