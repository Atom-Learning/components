import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../../box'
import { useBannerContext } from '../BannerContext'

const Container = styled(Box, {
  width: '62%',
  flexGrow: 1,
  variants: {
    size: {
      sm: {
        p: '$4'
      },
      md: {
        p: '$24',
        pr: '$5'
      }
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
