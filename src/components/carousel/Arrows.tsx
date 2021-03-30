import { ChevronLeft, ChevronRight } from '@atom-learning/icons'
import {
  ButtonBack as BaseButtonBack,
  ButtonNext as BaseButtonNext
} from 'pure-react-carousel'
import * as React from 'react'

import { Icon } from '~/components/icon'
import { CSS, styled } from '~/stitches'

const buttonStyles = {
  alignItems: 'center',
  bg: 'none',
  border: 'none',
  color: '$primary900',
  cursor: 'pointer',
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

const StyledButtonBack = styled(BaseButtonBack, buttonStyles)

const StyledButtonNext = styled(BaseButtonNext, buttonStyles)

export const ArrowPrevious: React.FC<{ css: CSS }> = (props) => (
  <StyledButtonBack {...props}>
    <Icon is={ChevronLeft} />
  </StyledButtonBack>
)
export const ArrowNext: React.FC<{ css: CSS }> = (props) => (
  <StyledButtonNext {...props}>
    <Icon is={ChevronRight} />
  </StyledButtonNext>
)
