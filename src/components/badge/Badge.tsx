import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box'
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
        height: 'calc(24px - $space$1)'
      },
      sm: {
        fontSize: '$md',
        px: '$4',
        height: 'calc(32px - $space$1)'
      },
      md: {
        fontSize: '$md',
        px: '$4',
        height: 'calc(48px - $space$1)'
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
      <Box
        as="div"
        css={{
          whiteSpace: 'nowrap',
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          py: '$0'
        }}
      >
        {children}
      </Box>
    </StyledBadge>
  )
}

Badge.displayName = 'Badge'
