import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'

const StyledBadge = styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$0',
  border: '1px solid #FFFFFF',
  fontFamily: '$body',
  variants: {
    theme: {
      success: {
        bg: '$successLight',
        color: '$successDark'
      },
      warning: {
        bg: '$warningLight',
        color: '$tonal600'
      },
      danger: {
        bg: '$dangerLight',
        color: '$dangerDark'
      },
      neutral: {
        bg: '$tonal50',
        color: '$tonal400'
      },
      info: {
        bg: '$primaryLight',
        color: '$primaryMid'
      }
    },
    size: {
      xs: {
        fontSize: '$sm',
        px: '$3',
        height: '24px'
      },
      sm: {
        fontSize: '$md',
        px: '$4',
        height: '32px'
      },
      md: {
        fontSize: '$md',
        px: '$4',
        height: '48px'
      }
    }
  }
})

type BadgeProps = React.ComponentProps<typeof StyledBadge>

export const Badge: React.FC<BadgeProps> = ({
  theme = 'info',
  size = 'sm',
  children,
  ...rest
}) => {
  return (
    <StyledBadge role="status" theme={theme} size={size} {...rest}>
      {children}
    </StyledBadge>
  )
}

Badge.displayName = 'Badge'
