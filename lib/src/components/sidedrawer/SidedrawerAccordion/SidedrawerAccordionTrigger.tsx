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

export const SidedrawerAccordionTrigger: React.FC = ({ children }) => (
  <Header>
    <StyledTrigger disabled={false}>
      {children}
      <Icon
        is={ChevronDown}
        css={{
          '[data-state=open] &': { transform: 'rotate(-180deg)' },
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'transform .2s ease'
          }
        }}
        size="sm"
      />
    </StyledTrigger>
  </Header>
)
