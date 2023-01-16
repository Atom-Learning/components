import { Box, styled } from '@atom-learning/components'
import * as React from 'react'

import { Sortable } from '../sortable'
import { StyledHandle } from '../sortable/Handle'
import { Item } from './SortableCoreImplementationItem'

const minHeight = {
  sm: '32px',
  md: '40px',
  lg: '48px'
}

const px = {
  sm: '$4',
  md: '$5',
  lg: '$5'
}

const pxHasHandle = {
  sm: '$2',
  md: '$4',
  lg: '$4'
}

const spacingBetweenElements = {
  sm: '$2',
  md: '$3',
  lg: '$3'
}

const mlHandle = {
  sm: '$1',
  md: '$2',
  lg: '$2'
}

const getSizeVariant = (size) => ({
  fontSize: `$${size}`,
  px: px[size],
  minHeight: minHeight[size],
  '& > *:not(:last-child)': {
    mr: spacingBetweenElements[size]
  },
  [`& ${StyledHandle}`]: {
    mr: pxHasHandle[size],
    ml: mlHandle[size]
  }
})

export const StyledButton = styled(Item, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  lineHeight: 1,
  py: '$1',
  [`& ${StyledHandle}`]: {
    size: '$2',
  },
  variants: {
    size: {
      sm: getSizeVariant('sm'),
      md: getSizeVariant('md'),
      lg: getSizeVariant('lg')
    },
    hasHandle: {
      true: {
        pl: 0
      }
    }
  },
  compoundVariants: [
    {
      hasHandle: true,
      size: 'sm',
      css: {
        pr: pxHasHandle['sm']
      }
    },
    {
      hasHandle: true,
      size: 'md',
      css: {
        pr: pxHasHandle['md']
      }
    },
    {
      hasHandle: true,
      size: 'lg',
      css: {
        pr: pxHasHandle['lg']
      }
    }
  ],
  defaultVariants: {
    size: 'md'
  }
})

export const Button: React.FC<React.ComponentProps<typeof StyledButton>> = ({
  id,
  hasHandle,
  children,
  ...rest
}) => {
  return (
    <StyledButton id={id} asHandle={!hasHandle} hasHandle={hasHandle} {...rest}>
      {hasHandle && <Sortable.Handle targetId={id} />}
      <Box css={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>{children}</Box>
    </StyledButton>
  )
}
