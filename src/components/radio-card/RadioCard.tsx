import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledRadioCard = styled(RadioGroup.Item, {
  alignItems: 'center',
  bg: 'white',
  border: '1px solid $tonal200',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  textAlign: 'left',
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
      true: {},
      false: {}
    },
    align: {
      left: { mr: '$4' },
      right: {}
    }
  },

  compoundVariants: [
    {
      containerIsFullWidth: true,
      align: 'right',
      css: { ml: 'auto' }
    },
    {
      containerIsFullWidth: false,
      align: 'right',
      css: { ml: '$4' }
    }
  ]
})

const Indicator = styled(RadioGroup.Indicator, {
  backgroundColor: 'white',
  borderRadius: '$round',
  position: 'absolute',
  size: '6px'
})

const Content = styled('div', {
  variants: {
    align: {
      left: { order: '1' },
      right: { order: '-1' }
    }
  }
})

type RadioCardProps = React.ComponentProps<typeof StyledRadioCard>

export const RadioCard: React.FC<RadioCardProps> = ({
  children,
  isFullWidth = false,
  size = 'md',
  align = 'left',
  ...rest
}) => (
  <StyledRadioCard {...rest} size={size} isFullWidth={isFullWidth}>
    <RadioButton align={align} containerIsFullWidth={isFullWidth}>
      <Indicator />
    </RadioButton>
    <Content align={align}>{children}</Content>
  </StyledRadioCard>
)
