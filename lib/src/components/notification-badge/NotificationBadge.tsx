import React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box'
import { Flex } from '../flex'

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
  transform: 'translate(calc($sizes$2 / 2), -50%)',
  borderRadius: '$round',
  p: '$2',
  height: '$2',
  minWidth: '$2',
  textAlign: 'center',
  color: '#fff',
  bg: '$primary800'
})

type NotificationBadgeProps = {
  value: number | string
}

export const NotificationBadge = ({
  value,
  children
}: React.PropsWithChildren<NotificationBadgeProps>) => (
  <StyledWrapper>
    {!!value && <StyledBadge role="status">{value}</StyledBadge>}
    {children}
  </StyledWrapper>
)
