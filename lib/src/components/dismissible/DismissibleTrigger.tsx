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

export const DismissibleTrigger: React.FC<IDismissibleTriggerProps> = ({
  asChild = false,
  ...rest
}) => {
  const context = React.useContext(DismissibleRootContext)
  if (context === undefined) {
    throw new Error(
      'Dismissible.Trigger can only be used within a Dismissible.Item'
    )
  }

  const { setIsDismissed, disabled } = context

  const handleDismiss = () => {
    setIsDismissed(true)
  }

  const props = {
    disabled: disabled,
    onClick: handleDismiss,
    ...rest
  }

  const Component = asChild ? Slot : DefaultTrigger
  return <Component {...props} />
}
