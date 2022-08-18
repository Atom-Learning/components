import * as React from 'react'

import { DismissibleGroupContext } from './DismissibleGroupRoot'
import { Dismissible } from '~/components/dismissible'

export interface IDismissibleGroupItemProps {
  disabled?: boolean
}

export const DismissibleGroupItem: React.FC<
  IDismissibleGroupItemProps & typeof Dismissible
> = ({ children, disabled: itemDisabled = false, ...rest }) => {
  const groupContext = React.useContext(DismissibleGroupContext)
  if (groupContext === undefined) {
    throw new Error(
      'DismissibleGroup.Item should be use withing a DismissibleGroup.Root'
    )
  }
  const { onDismiss, disabled: groupDisabled } = groupContext
  return (
    <Dismissible.Root
      disabled={groupDisabled || itemDisabled}
      onDismiss={onDismiss}
      {...rest}
    >
      {children}
    </Dismissible.Root>
  )
}
