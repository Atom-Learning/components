import * as React from 'react'

import { styled } from '~/stitches'

import { Heading } from '../../heading'
import { useBannerContext } from '../BannerContext'

const StyledHeading = styled(Heading, {
  mb: '$4',
  color: 'var(--banner-heading-color)',
  variants: {
    containerSize: {
      sm: {},
      md: {}
    },
    hasDismiss: {
      true: {}
    }
  },
  compoundVariants: [
    {
      containerSize: 'sm',
      hasDismiss: true,
      css: {
        mr: '$6'
      }
    }
  ]
})

export const BannerRegularHeading: React.FC<
  React.ComponentProps<typeof Heading>
> = (props) => {
  const { size, hasDismiss } = useBannerContext()

  return (
    <StyledHeading
      size="sm"
      containerSize={size}
      hasDismiss={hasDismiss}
      {...props}
    />
  )
}

BannerRegularHeading.displayName = 'BannerRegularHeading'
