import * as React from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

export const OptionallyVisuallyHiddenContainer: React.FC<{
  hidden?: boolean
}> = ({ children, hidden = false }) => {
  if (hidden) return <VisuallyHidden.Root>{children}</VisuallyHidden.Root>

  return children ? <>{children}</> : null
}
