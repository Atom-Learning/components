import { ChevronDown } from '@atom-learning/icons'
import React from 'react'
import { Header, Trigger } from '@radix-ui/react-accordion'
import { styled } from '~/stitches'
import { Icon } from '../../icon/Icon'
import { Flex } from '../../flex/Flex'
import { sidedrawerItemStyles } from '../Sidedrawer.styles'

const StyledTrigger = styled(Trigger, {
  justifyContent: 'space-between',
  m: 0,
  p: 0,
  '[data-state=open] &': { fontWeight: '600' },
  ...sidedrawerItemStyles
})

const StyledIcon = styled(Icon, {
  transition: 'transform 300ms',
  '[data-state="open"] > &': {
    transform: 'rotate(180deg)'
  }
})

export const SidedrawerAccordionTrigger: React.FC = ({ children }) => (
  <Header>
    <StyledTrigger>
      <Flex
        css={{
          alignItems: 'center'
        }}
      >
        {children}
      </Flex>
      <StyledIcon is={ChevronDown} size="sm" />
    </StyledTrigger>
  </Header>
)
