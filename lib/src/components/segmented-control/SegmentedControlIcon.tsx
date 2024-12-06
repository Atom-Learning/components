import * as React from 'react'

import { Icon } from '../icon'
import { useSegmentedControl } from './SegmentedControlContext'

const sizeMap = {
  sm: 'sm',
  md: 'md',
  lg: 'md'
}

export const SegmentedControlIcon = (
  props: Omit<React.ComponentProps<typeof Icon>, 'size'>
): JSX.Element => {
  const { size } = useSegmentedControl()
  return <Icon {...props} size={sizeMap[size as string]} />
}
