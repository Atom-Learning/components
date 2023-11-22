import * as React from 'react'
import { Flex } from '../../flex'

import { styled } from '~/stitches'

import { useBannerContext } from '../BannerContext'

const Container = styled(Flex, {
  flexDirection: 'column',
  gap: '$4',
  width: '62%',
  flexGrow: 1,
  variants: {
    size: {
      sm: { p: '$4' },
      md: { p: '$24', gap: '$24', pr: '$5' }
    }
  }
})

export const BannerRegularContent: React.FC<
  React.ComponentProps<typeof Container>
> = (props) => {
  const { size } = useBannerContext()

  return <Container size={size} {...props} />
}

BannerRegularContent.displayName = 'BannerRegularContent'
