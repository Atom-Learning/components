import * as React from 'react'

import { Box } from '~/components/box'
import { Checkbox } from '~/components/checkbox'
import { InlineMessage } from '~/components/inline-message'
import { Label } from '~/components/label'
import { RadioButton } from '~/components/radio-button'
import type { CSS } from '~/stitches'

import { Description } from './FieldDescription'

type InlineFieldWrapperProps = {
  css?: CSS
  error?: string
  label: string
  required?: boolean
  align?: 'start' | 'center'
  direction?: 'row' | 'reverse'
  description?: string
}

export const InlineFieldWrapper = ({
  align = 'start',
  children,
  css,
  description,
  direction = 'row',
  error,
  label,
  required
}: React.PropsWithChildren<InlineFieldWrapperProps>) => (
  <Box css={css}>
    <Label
      align={align}
      direction={direction}
      required={required}
      type="inline"
    >
      {React.Children.map(children, (child: any) => (
        <Box
          css={{
            [direction === 'reverse' ? 'ml' : 'mr']: '$3',
            // provide offset for specific child components
            ...((child?.type === Checkbox || child?.type === RadioButton) && {
              transform: 'translateY($space$1)'
            })
          }}
        >
          {child}
        </Box>
      ))}
      {label}
    </Label>
    {error && <InlineMessage css={{ mt: '$2' }}>{error}</InlineMessage>}
    {description && (
      <Description
        css={{
          mt: '$2',
          // calc required to get correct offset value
          [direction === 'reverse' ? 'mr' : 'ml']: 'calc($space$3 + $sizes$1)'
        }}
      >
        {description}
      </Description>
    )}
  </Box>
)

InlineFieldWrapper.displayName = 'InlineFieldWrapper'
