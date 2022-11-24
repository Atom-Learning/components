import { Root } from '@radix-ui/react-accordion'
import React from 'react'
import { styled } from '~/stitches'

const StyledRoot = styled(Root, {
  width: '100%'
})

interface SidedrawerAccordionProps {
  type?: 'single' | 'multiple'
}

export const SidedrawerAccordion: React.FC<SidedrawerAccordionProps> = ({
  children,
  ...remainingProps
}) => (
  <StyledRoot type="single" {...remainingProps}>
    {children}
  </StyledRoot>
)

SidedrawerAccordion.displayName = 'SidedrawerAccordion'
