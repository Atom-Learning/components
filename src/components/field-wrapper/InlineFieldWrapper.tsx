import * as React from 'react'

import { Box } from '~/components/box'
import { Checkbox } from '~/components/checkbox'
import { Label } from '~/components/label'
import { RadioButton } from '~/components/radio'
import { ValidationError } from '~/components/validation-error'
import type { CSS } from '~/stitches'

import { Description } from './FieldDescription'

type InlineFieldWrapperProps = {
  css?: CSS
  error?: string
  label: string
  required?: boolean
  align?: 'baseline' | 'center'
  direction?: 'row' | 'reverse'
  description?: string
}

export const InlineFieldWrapper: React.FC<InlineFieldWrapperProps> = ({
  align = 'baseline',
  children,
  css,
  description,
  direction = 'row',
  error,
  label,
  required
}) => (
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
              transform: 'translateY($space$0)'
            })
          }}
        >
          {child}
        </Box>
      ))}
      {label}
    </Label>
    {error && <ValidationError css={{ mt: '$2' }}>{error}</ValidationError>}
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
