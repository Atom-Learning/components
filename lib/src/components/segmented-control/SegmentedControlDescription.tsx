import * as React from 'react'

import { styled } from '../../stitches'
import { Text } from '../text'
import { useSegmentedControl } from './SegmentedControlContext'

const StyledText = styled(Text, {
  fontFamily: '$body',
  color: '$textSubtle',
  fontWeight: 400,
  variants: {
    size: {
      sm: {
        fontSize: '$xs'
      },
      md: {
        fontSize: '$sm'
      },
      lg: {
        fontSize: '$md'
      }
    }
  }
})

export const SegmentedControlDescription = (
  props: Omit<React.ComponentProps<typeof StyledText>, 'size'>
): JSX.Element => {
  const { size } = useSegmentedControl()
  return <StyledText {...props} size={size} />
}
