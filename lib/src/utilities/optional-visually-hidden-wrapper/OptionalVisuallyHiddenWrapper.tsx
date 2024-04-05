import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import * as React from 'react'

export const OptionalVisuallyHiddenWrapper = ({
  children,
  hidden = false
}: React.PropsWithChildren<{
  hidden?: boolean
}>) => {
  if (hidden) return <VisuallyHidden.Root>{children}</VisuallyHidden.Root>

  return children ? (
    // children could be multiple elements/components,
    // so we need a fragment here.
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : null
}

OptionalVisuallyHiddenWrapper.displayName = 'OptionalVisuallyHiddenWrapper'
