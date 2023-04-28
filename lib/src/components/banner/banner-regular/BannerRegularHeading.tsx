import * as React from 'react'

import { styled } from '~/stitches'

import { Heading } from '../../heading'
import { useBannerContext } from '../BannerContext'

const StyledHeading = styled(Heading, {
  mb: '$4',
  variants: {
    containerSize: {
      sm: {
        mr: '$6'
      },
      md: {
        mr: 0
      }
    }
  }
})

export const BannerRegularHeading: React.FC<
  React.ComponentProps<typeof Heading>
> = (props) => {
  const { size } = useBannerContext()

  return <StyledHeading size="sm" containerSize={size} {...props} />
}

BannerRegularHeading.displayName = 'BannerRegularHeading'
