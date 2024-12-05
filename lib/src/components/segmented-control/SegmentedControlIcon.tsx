import * as React from 'react'

import { Icon } from '../icon'
import { useSegmentedControl } from './SegmentedControlContext'

export const SegmentedControlIcon = (
  props: Omit<React.ComponentProps<typeof Icon>, 'size'>
): JSX.Element => {
  const { size } = useSegmentedControl()
  return <Icon {...props} size={size} />
}
