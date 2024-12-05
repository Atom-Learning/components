import * as React from 'react'

import { Badge } from '../badge'
import { useSegmentedControl } from './SegmentedControlContext'

const badgeSizeMap = {
  sm: 'xs',
  md: 'xs',
  lg: 'sm'
}

export const SegmentedControlBadge = ({
  css,
  ...props
}: Omit<React.ComponentProps<typeof Badge>, 'size'>): JSX.Element => {
  const { size } = useSegmentedControl()
  return (
    <Badge
      {...props}
      css={{ border: 'none', ...css }}
      size={badgeSizeMap[size as string]}
    />
  )
}
