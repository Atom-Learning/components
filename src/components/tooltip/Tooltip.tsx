import { Slot } from '@radix-ui/react-slot'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledContent = styled(RadixTooltip.Content, {
  borderRadius: '3', // '$0' is too high for the arrow to sit flush against the box if the arrow renders near a corner
  padding: '$1 $2',
  fontFamily: '$sans',
  fontSize: 14,
  backgroundColor: '$tonal300',
  color: '$tonal900'
})

const StyledArrow = styled(RadixTooltip.Arrow, {
  fill: '$tonal300'
})

export const Tooltip = ({ children, content }) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger as={Slot}>{children}</RadixTooltip.Trigger>
      <StyledContent>
        {content}
        <StyledArrow />
      </StyledContent>
    </RadixTooltip.Root>
  )
}
