import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { DismissibleRootContext } from './DismissibleRoot'

export interface IDismissibleTriggerProps {
  asChild?: boolean
}

const DefaultTrigger = (props) => (
  <button type="button" {...props}>
    Dismiss
  </button>
)

export const DismissibleTrigger = ({
  asChild = false,
  ...rest
}: React.PropsWithChildren<IDismissibleTriggerProps>) => {
  const context = React.useContext(DismissibleRootContext)
  if (context === undefined) {
    throw new Error(
      'Dismissible.Trigger can only be used within a Dismissible.Item'
    )
  }

  const { setIsDismissed, disabled, onDismiss } = context

  const handleDismiss = () => {
    setIsDismissed(true)
    onDismiss?.()
  }

  const props = {
    disabled: disabled,
    onClick: handleDismiss,
    ...rest
  }

  const Component = asChild ? Slot : DefaultTrigger
  return <Component {...props} />
}
