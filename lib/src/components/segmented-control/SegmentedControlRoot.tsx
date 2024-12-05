import * as React from 'react'

import { styled } from '../../stitches'
import { Tabs } from '../tabs'
import { SegmentedControlContent } from './SegmentedControlContent'
import {
  SegmentedControlProvider,
  SegmentedControlTheme
} from './SegmentedControlContext'
import { SegmentedControlItem } from './SegmentedControlItem'

const StyledTabsRoot = styled(Tabs, {
  '& > div': { border: 'none' },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {}
    }
  }
})

export type SegmentedControlRootProps = React.ComponentProps<
  typeof StyledTabsRoot
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
      <StyledTabsRoot {...props} size={size}>
        <Tabs.TriggerList
          css={{ bg: `$${theme}200`, p: '$1', borderRadius: '$3' }}
        >
          {tabTriggers}
        </Tabs.TriggerList>
        {tabContents}
      </StyledTabsRoot>
    </SegmentedControlProvider>
  )
}
