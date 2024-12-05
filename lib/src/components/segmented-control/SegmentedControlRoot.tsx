import * as React from 'react'

import { styled } from '../../stitches'
import { ToggleGroup } from '../toggle-group'
import { SegmentedControlProvider } from './SegmentedControlContext'

const StyledRoot = styled(ToggleGroup.Root, {
  bg: '$primary200',
  p: '$1',
  borderRadius: '$3',
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {}
    }
  }
})

export type SegmentedControlRootProps = Omit<
  React.ComponentProps<typeof StyledRoot>,
  'gap' | 'type' | 'wrap'
>

export const SegmentedControlRoot = ({
  size,
  children,
  ...props
}: SegmentedControlRootProps): JSX.Element => {
  return (
    <SegmentedControlProvider size={size}>
      <StyledRoot
        {...props}
        type="single"
        wrap={false}
        gap={null}
        hasGap
        size={size}
        orientation="horizontal"
      >
        {children}
      </StyledRoot>
    </SegmentedControlProvider>
  )
}
