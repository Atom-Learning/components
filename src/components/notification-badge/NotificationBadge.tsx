import React from 'react'

import { Box } from '../box'

import { styled } from '~/stitches'

const StyledWrapper = styled(Box, {
  position: 'relative'
})

const StyledBadge = styled(Box, {
  fontFamily: '$body',
  position: 'absolute',
  top: '-$2',
  left: '100%',
  transform: 'translateX(-50%)',
  borderRadius: '$round',
  p: '$1',
  height: '$2',
  minWidth: '$2',
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
      }
    }
  }
})

type NotificationBadgeProps = React.ComponentProps<typeof StyledBadge> & {
  value: number | string
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  theme = 'primary',
  value,
  children
}) => (
  <StyledWrapper>
    <StyledBadge role="status" theme={theme}>
      {value}
    </StyledBadge>
    {children}
  </StyledWrapper>
)
