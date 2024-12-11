import * as React from 'react'

import { styled } from '../../stitches'
import { Tabs } from '../tabs'
import { SegmentedControlContent } from './SegmentedControlContent'
import {
  SegmentedControlProvider,
  SegmentedControlTheme
} from './SegmentedControlContext'
import { SegmentedControlItem } from './SegmentedControlItem'

const StyledSegmentControlRoot = styled(Tabs, {
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

export type SegmentedControlRootProps = React.ComponentProps<
  typeof StyledSegmentControlRoot
> & {
  theme?: SegmentedControlTheme
}

export const SegmentedControlRoot = ({
  size,
  children,
  theme = 'primary',
  ...props
}: SegmentedControlRootProps): JSX.Element => {
  const tabTriggers = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && child.type === SegmentedControlItem
  )
  const tabContents = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && child.type === SegmentedControlContent
  )

  return (
    <SegmentedControlProvider size={size} theme={theme}>
      <StyledSegmentControlRoot {...props} size={size}>
        <Tabs.TriggerList
          css={{ bg: `$${theme}200`, p: '$1', borderRadius: '$3' }}
        >
          {tabTriggers}
        </Tabs.TriggerList>
        {tabContents}
      </StyledSegmentControlRoot>
    </SegmentedControlProvider>
  )
}
