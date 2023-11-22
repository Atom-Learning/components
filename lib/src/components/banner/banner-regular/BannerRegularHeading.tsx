import * as React from 'react'

import { styled } from '~/stitches'

import { Heading } from '../../heading'
import { useBannerContext } from '../BannerContext'

const StyledHeading = styled(Heading, {
  color: 'var(--banner-heading-color)',
  variants: {
    hasDismiss: {
      true: { mr: '$6' }
    }
  }
})

export const BannerRegularHeading: React.FC<
  React.ComponentProps<typeof Heading>
> = (props) => {
  const { hasDismiss } = useBannerContext()

  return <StyledHeading size="sm" hasDismiss={hasDismiss} {...props} />
}

BannerRegularHeading.displayName = 'BannerRegularHeading'
