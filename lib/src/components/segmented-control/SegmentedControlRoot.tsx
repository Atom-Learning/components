import * as React from 'react'

import { styled } from '../../stitches'
import { Tabs } from '../tabs'
import {
  SegmentedControlProvider,
  SegmentedControlTheme
} from './SegmentedControlContext'

const StyledSegmentedControlRoot = styled(Tabs, {
  '& > div': { border: 'none' },
  variants: {
    size: {
      sm: {
        width: 'unset'
      },
      md: {},
      lg: {}
    }
  }
})

export interface SegmentedControlRootProps
  extends React.ComponentProps<typeof StyledSegmentedControlRoot> {
  theme?: SegmentedControlTheme
}

export const SegmentedControlRoot = ({
  size,
  children,
  theme = 'primary',
  ...props
}: SegmentedControlRootProps): JSX.Element => {
  return (
    <SegmentedControlProvider size={size} theme={theme}>
      <StyledSegmentedControlRoot {...props} size={size}>
        {children}
      </StyledSegmentedControlRoot>
    </SegmentedControlProvider>
  )
}
