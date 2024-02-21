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
  bg: 'unset',
  border: 'unset',
  color: '$primary800',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  p: 'unset',
  size: '$5',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'color 0.15s ease-in-out',
  '&:hover': {
    color: '$primary900'
  },
  '&:active': {
    color: '$primary1000'
  },
  '&:disabled': {
    color: '$tonal100'
  }
}

const StyledButtonBack = styled(BaseButtonBack, buttonStyles)

const StyledButtonNext = styled(BaseButtonNext, buttonStyles)

export const CarouselArrowPrevious = (props: { css: CSS }) => (
  <StyledButtonBack {...props}>
    <Icon is={ChevronLeft} />
  </StyledButtonBack>
)
export const CarouselArrowNext = (props: { css: CSS }) => (
  <StyledButtonNext {...props}>
    <Icon is={ChevronRight} />
  </StyledButtonNext>
)
