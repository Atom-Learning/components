import * as React from 'react'

import { styled } from '~/stitches'

import { Icon, StyledIcon } from '../icon'
import { StyledItem } from './ToggleGroupItem'

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

const spacingBetweenElements = {
  sm: '8px',
  md: '12px',
  lg: '12px'
}

const getSizeVariant = (size) => ({
  fontSize: `$${size}`,
  px: px[size],
  minHeight: minHeight[size],
  '& > *:not(:last-child)': {
    mr: spacingBetweenElements[size]
  }
})

export const StyledButton = styled(StyledItem, {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  lineHeight: 1,
  py: '$1',
  [`& ${StyledIcon}`]: {
    flexShrink: 0
  },
  variants: {
    size: {
      sm: getSizeVariant('sm'),
      md: getSizeVariant('md'),
      lg: getSizeVariant('lg')
    },
    isIconOnly: {
      true: {
        px: '0 !important',
        py: '0 !important'
      }
    }
  },
  compoundVariants: [
    {
      isIconOnly: true,
      size: 'sm',
      css: {
        minWidth: minHeight.sm
      }
    },
    {
      isIconOnly: true,
      size: 'md',
      css: {
        minWidth: minHeight.md
      }
    },
    {
      isIconOnly: true,
      size: 'lg',
      css: {
        minWidth: minHeight.lg
      }
    }
  ]
})

export const ToggleGroupButton: React.FC<
  React.ComponentProps<typeof StyledButton>
> = ({ size, children, ...rest }) => {
  const childrenArray = React.Children.toArray(children)
  const isSingleChild = childrenArray.length <= 1
  const isIconOnly =
    isSingleChild &&
    React.isValidElement(childrenArray[0]) &&
    childrenArray[0]?.type === Icon

  return (
    <StyledButton size={size} isIconOnly={isIconOnly} {...rest}>
      {
        childrenArray.map((child) => {
          if (!isSingleChild && typeof child === 'string')
            return <span key={child}>{child}</span>
          if (React.isValidElement(child)) {
            if (child?.type === Icon)
              return React.cloneElement(child, { ...child.props, size })
          }
          return child
        }) as React.ReactElement[]
      }
    </StyledButton>
  )
}
