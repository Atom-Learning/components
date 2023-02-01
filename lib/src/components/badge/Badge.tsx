import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box'
import { Flex } from '../flex'
import { Icon } from '../icon'

const StyledBadge = styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$0',
  minWidth: 0,
  border: '1px solid #FFFFFF',
  fontFamily: '$body',
  '& > *:not(:last-child)': {
    mr: '$1'
  },
  variants: {
    theme: {
      success: {
        bg: '$successLight',
        color: '$successMid'
      },
      warning: {
        bg: '$warningLight',
        color: '$warningText'
      },
      danger: {
        bg: '$dangerLight',
        color: '$dangerMid'
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
        px: '$1',
        height: '$2'
      },
      sm: {
        fontSize: '$md',
        px: '$1',
        height: '$3'
      },
      md: {
        fontSize: '$md',
        px: '$2',
        height: '$4'
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
      {React.Children.map(children, (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          return (
            <Box
              css={{
                whiteSpace: 'nowrap',
                overflowX: 'hidden',
                textOverflow: 'ellipsis',
                py: '$0'
              }}
            >
              {child}
            </Box>
          )
        }

        if (React.isValidElement(child) && child.type === Icon) {
          return React.cloneElement(
            child as React.ReactElement<React.ComponentProps<typeof Icon>>,
            {
              size: 'sm',
              css: { ...child.props.css, flexShrink: 0 }
            }
          )
        }
      })}
    </StyledBadge>
  )
}

Badge.displayName = 'Badge'
