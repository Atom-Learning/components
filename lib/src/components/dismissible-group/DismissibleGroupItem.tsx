import * as React from 'react'

import { DismissibleGroupContext } from './DismissibleGroupRoot'
import { Dismissible } from '~/components/dismissible'

export type TDismissibleGroupItemProps = React.ComponentProps<
  typeof Dismissible
> & {
  disabled?: boolean
}

export const DismissibleGroupItem: React.FC<TDismissibleGroupItemProps> = ({
  children,
  disabled: itemDisabled = false,
  ...rest
}) => {
  const groupContext = React.useContext(DismissibleGroupContext)
  if (groupContext === undefined) {
    throw new Error(
      'DismissibleGroup.Item should be use withing a DismissibleGroup'
    )
  }
  const { onDismiss, disabled: groupDisabled } = groupContext
  return (
    <Dismissible
      disabled={groupDisabled || itemDisabled}
      onDismiss={onDismiss}
      {...rest}
    >
      {children}
    </Dismissible>
  )
}
