import * as React from 'react'

import { Box } from '~/components/box'
import { Label } from '~/components/label'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import { Description } from './FieldDescription'
import type { TFieldWrapperProps } from './FieldWrapper'

export type TInlineFieldWrapperProps = Omit<TFieldWrapperProps, 'prompt' | 'feedback'>

export const InlineFieldWrapper: React.FC<TInlineFieldWrapperProps> = ({
  children,
  name,
  label,
  description,
  hideLabel,
  ...rest
}) => {
  const LabelTextContainer = hideLabel ? VisuallyHidden.Root : Box

  return (
    <Label
      {...rest}
      {...name ? { htmlFor: name } : {}}
      type="inline"
    >
      {children}
      <LabelTextContainer css={{ ml: '$3', mt: '-$1' }}>
        {label}<br />
        {description && <Description>{description}</Description>}
      </LabelTextContainer>
    </Label>
  )
}

InlineFieldWrapper.displayName = 'InlineFieldWrapper'
