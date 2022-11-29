import { Root } from '@radix-ui/react-accordion'
import React, { ComponentProps } from 'react'
import { styled } from '~/stitches'

const StyledRoot = styled(Root, {
  width: '100%'
})

export const SidedrawerAccordionRoot: React.FC<ComponentProps<typeof Root>> = ({
  children,
  ...remainingProps
}) => <StyledRoot {...remainingProps}>{children}</StyledRoot>

SidedrawerAccordionRoot.displayName = 'SidedrawerAccordionRoot'
