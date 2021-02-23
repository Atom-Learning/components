import { Slot } from '@radix-ui/react-slot'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import * as React from 'react'

import { Box } from '~/components/box'
import { styled } from '~/stitches'

const StyledContent = styled(RadixTooltip.Content, {
  borderRadius: '3', // '$0' is too high for the arrow to sit flush against the box if the arrow renders near a corner
  padding: '$1 $2',
  fontFamily: '$sans',
  fontSize: 14,
  backgroundColor: '$tonal600',
  color: 'white'
})

const StyledArrow = styled(RadixTooltip.Arrow, {
  fill: '$tonal600'
})

type TooltipProps = {
  content: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const triggerContainerRef = React.useRef<HTMLElement>(null)
  // const triggerContainerRef = React.useRef<HTMLDivElement>(null)

  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger as={Slot}>
        {/* inline Box so that the Tooltip knows the real size of the trigger */}
        <Box ref={triggerContainerRef} css={{ display: 'inline' }}>
          {children}
        </Box>
      </RadixTooltip.Trigger>
      <StyledContent side="top" anchorRef={triggerContainerRef}>
        {content}
        <StyledArrow />
      </StyledContent>
    </RadixTooltip.Root>
  )
}
