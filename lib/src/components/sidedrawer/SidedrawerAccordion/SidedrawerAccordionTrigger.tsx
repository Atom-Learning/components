import { ChevronDown } from '@atom-learning/icons'
import React from 'react'
import { Header, Trigger } from '@radix-ui/react-accordion'
import { styled } from '~/stitches'
import { Icon } from '../../icon/Icon'
import { sidedrawerItemStyles } from '../Sidedrawer.styles'

const StyledTrigger = styled(Trigger, {
  justifyContent: 'space-between',
  m: 0,
  p: 0,
  '[data-state=open] &': { fontWeight: '600' },
  ...sidedrawerItemStyles
})

const StyledIcon = styled(Icon, {
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform .2s ease'
  }
})

export const SidedrawerAccordionTrigger: React.FC = ({ children }) => (
  <Header>
    <StyledTrigger>
      {children}
      <StyledIcon is={ChevronDown} size="sm" />
    </StyledTrigger>
  </Header>
)
