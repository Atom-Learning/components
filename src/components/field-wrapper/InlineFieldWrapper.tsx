import * as React from 'react'

import { Box } from '~/components/box'
import { Label } from '~/components/label'
import { Text } from '~/components/text'
import { ValidationError } from '~/components/validation-error'
import { CSS, styled } from '~/stitches'

import { Checkbox } from '../checkbox/Checkbox'
import { RadioButton } from '../radio-button/RadioButton'

const InlineLabel = styled(Label, {
  display: 'flex',
  fontWeight: 400,
  maxWidth: 'max-content',
  variants: {
    align: {
      baseline: { alignItems: 'baseline' },
      center: { alignItems: 'center' }
    },
    direction: {
      reverse: { flexDirection: 'row-reverse' },
      row: { flexDirection: 'row' }
    }
  }
})

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
    <InlineLabel direction={direction} align={align} required={required}>
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
    </InlineLabel>
    {error && <ValidationError css={{ mt: '$2' }}>{error}</ValidationError>}
    {description && (
      <Text
        size="sm"
        css={{
          color: '$tonal300',
          mt: '$2',
          [direction === 'reverse' ? 'mr' : 'ml']: 'calc($space$3 + $sizes$1)', // calc required to get correct offset value
          maxWidth: '80ch'
        }}
      >
        {description}
      </Text>
    )}
  </Box>
)

InlineFieldWrapper.displayName = 'InlineFieldWrapper'
