import { ChevronDown } from '@atom-learning/icons'
import { Header, Trigger } from '@radix-ui/react-accordion'
import React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../../flex/Flex'
import { Icon } from '../../icon/Icon'
import { sidedrawerItemStyles } from '../Sidedrawer.styles'

const StyledTrigger = styled(Trigger, {
  justifyContent: 'space-between',
  m: 0,
  p: 0,
  '&[data-state=open]': { fontWeight: '600' },
  ...sidedrawerItemStyles
})

const StyledIcon = styled(Icon, {
  transition: 'transform 300ms',
  '[data-state="open"] > &': {
    transform: 'rotate(180deg)'
  }
})

export const SidedrawerAccordionTrigger: React.FC<
  React.ComponentProps<typeof StyledTrigger>
> = ({ children, ...remainingProps }) => (
  <Header>
    <StyledTrigger {...remainingProps}>
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
