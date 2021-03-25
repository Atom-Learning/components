import { ButtonBack, ButtonNext } from 'pure-react-carousel'
import * as React from 'react'

import { ChevronLeft, ChevronRight, Icon } from '~/components/icon'
import { styled } from '~/stitches'

const buttonStyles = {
  alignItems: 'center',
  bg: 'none',
  border: 'none',
  color: '$primary900',
  display: 'flex',
  size: '44px',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'color 0.15s ease-in-out',
  '&:hover': {
    color: '$primary500'
  },
  '&:disabled': {
    color: '$tonal300'
  }
}

const StyledButtonBack = styled(ButtonBack, {
  ...buttonStyles,
  left: '$2',
  '@md': {
    left: '$3'
  },
  '@lg': {
    left: '$4'
  }
})

const StyledButtonNext = styled(ButtonNext, {
  ...buttonStyles,
  right: '$2',
  '@md': {
    right: '$3'
  },
  '@lg': {
    right: '$4'
  }
})

export const Arrows: React.FC = () => (
  <>
    <StyledButtonBack>
      <Icon is={ChevronLeft} />
    </StyledButtonBack>
    <StyledButtonNext>
      <Icon is={ChevronRight} />
    </StyledButtonNext>
  </>
)
