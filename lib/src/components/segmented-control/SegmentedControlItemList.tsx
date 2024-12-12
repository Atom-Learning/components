import * as React from 'react'

import { styled } from '../../stitches'
import { Tabs } from '../tabs'
import { useSegmentedControl } from './SegmentedControlContext'

const StyledTriggerList = styled(Tabs.TriggerList, {
  p: '$1',
  borderRadius: '$3',
  variants: {
    theme: {
      primary: { bg: '$primary200' },
      marsh: { bg: '$marsh200' }
    }
  }
})

export const SegmentedControlItemList = (
  props: React.ComponentProps<typeof Tabs.TriggerList>
): JSX.Element => {
  const { theme } = useSegmentedControl()
  return <StyledTriggerList {...props} theme={theme} />
}
