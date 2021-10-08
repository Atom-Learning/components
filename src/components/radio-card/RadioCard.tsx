import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledRadioCard = styled(RadioGroup.Item, {
  alignItems: 'center',
  bg: 'white',
  border: '1px solid $tonal300',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  '&[data-state="checked"]': {
    outline: '2px solid $primary',
    outlineOffset: '-2px'
  },

  variants: {
    size: {
      md: { px: '$4', py: '$3' },
      lg: { px: '$5', py: '$4' }
    },
    isFullWidth: {
      true: { width: '100%' },
      false: { width: 'max-content' }
    }
  }
})

const RadioButton = styled('div', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid $tonal500',
  borderRadius: '$round',
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  p: 0,
  size: '$1',
  transition: 'all 50ms ease-out',
  '[data-state="checked"] &': {
    backgroundColor: '$primary',
    borderColor: '$primary'
  },

  variants: {
    containerIsFullWidth: {
      true: { ml: 'auto' },
      false: { ml: '$4' }
    }
  }
})

const Indicator = styled(RadioGroup.Indicator, {
  backgroundColor: 'white',
  borderRadius: '$round',
  position: 'absolute',
  size: '6px'
})

type RadioCardProps = React.ComponentProps<typeof StyledRadioCard>

export const RadioCard: React.FC<RadioCardProps> = ({
  children,
  isFullWidth,
  size = 'md',
  ...rest
}) => (
  <StyledRadioCard {...rest} size={size} isFullWidth={isFullWidth}>
    {children}
    <RadioButton containerIsFullWidth={isFullWidth}>
      <Indicator />
    </RadioButton>
  </StyledRadioCard>
)
