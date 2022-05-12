// (!) WIP
// This component has appeared in designs but has not been defined in the DS yet!

import * as React from 'react'

import { StackContent } from '~/components/stack-content'
import { styled } from '~/stitches'

import { StyledItem } from './ToggleGroupItem'

const minHeight = {
  sm: '420px',
  md: '420px',
  lg: '420px',
};

const px = {
  sm: '$4',
  md: '$5',
  lg: '$5',
};

const getSizeVariant = (size) => ({
  fontSize: `$${size}`,
  px: px[size],
  minHeight: minHeight[size]
})

export const StyledCard = styled(StyledItem, {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  py: '$4',
  variants: {
    size: {
      sm: getSizeVariant('sm'),
      md: getSizeVariant('md'),
      lg: getSizeVariant('lg')
    }
  }
})

export const ToggleGroupCard: React.FC<React.ComponentProps<typeof StyledCard>> = ({ children, size, ...rest }) => {
  const isArrayChildren = Array.isArray(children);

  return (
    <StyledCard size={size} style={{ position: 'relative' }} {...rest}>
      <StackContent>
        {isArrayChildren ?
          children?.map((child) => typeof child === 'string' ? <span key={child}>{child}</span> : child) as React.ReactElement[] :
          children
        }
      </StackContent>
      <span style={{ fontSize: '8px', position: 'absolute', bottom: '8px' }}>/this component is WIP/</span>
    </StyledCard>
  )
}