import React from 'react'

import { Box } from '../box'

import { styled } from '~/stitches'

const StyledWrapper = styled(Box, {
  position: 'relative'
})

const StyledBadge = styled(Box, {
  position: 'absolute',
  top: '-$2',
  right: '-$2',
  borderRadius: '$round',
  p: '$1',
  height: '$2',
  width: '$2',
  textAlign: 'center',
  variants: {
    theme: {
      primary: {
        bg: '$primary',
        color: '#fff'
      },
      dark: {
        bg: '$tonal600',
        color: '#fff'
      },
      neutral: {
        bg: '#fff'
      }
    },
    appearance: {
      simple: {},
      outline: {
        border: '1px solid currentColor'
      }
    }
  }
})

type NotificationBadgeProps = React.ComponentProps<typeof StyledBadge> & {
  value: number | string
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  theme = 'primary',
  appearance = 'simple',
  value,
  children
}) => (
  <StyledWrapper>
    <StyledBadge appearance={appearance} theme={theme}>
      {value}
    </StyledBadge>
    {children}
  </StyledWrapper>
)
