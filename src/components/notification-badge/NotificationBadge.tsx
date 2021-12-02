import React from 'react'

import { Box } from '../box'
import { Flex } from '../flex'

import { styled } from '~/stitches'

const StyledWrapper = styled(Box, {
  position: 'relative'
})

const StyledBadge = styled(Flex, {
  fontFamily: '$body',
  fontSize: '$sm',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'absolute',
  top: '0',
  right: '0',
  transform: 'translate(50%, -50%)',
  borderRadius: '$round',
  p: '$1',
  height: '$2',
  minWidth: '$2',
  textAlign: 'center',
  color: '#fff',
  bg: '$primary'
})

type NotificationBadgeProps = React.ComponentProps<typeof StyledBadge> & {
  value: number | string
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  value,
  children
}) => (
  <StyledWrapper>
    <StyledBadge role="status">{value}</StyledBadge>
    {children}
  </StyledWrapper>
)
