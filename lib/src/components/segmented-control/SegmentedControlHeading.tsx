import * as React from 'react'

import { styled } from '../../stitches'
import { Heading } from '../heading'
import { useSegmentedControl } from './SegmentedControlContext'

const StyledHeading = styled(Heading, {
  fontFamily: '$body',
  variants: {
    size: {
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      },
      lg: {
        fontSize: '$lg'
      }
    }
  }
})

export const SegmentedControlHeading = (
  props: Omit<React.ComponentProps<typeof StyledHeading>, 'size'>
): JSX.Element => {
  const { size } = useSegmentedControl()
  return <StyledHeading {...props} size={size} />
}
