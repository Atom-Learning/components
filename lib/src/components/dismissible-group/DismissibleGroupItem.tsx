import * as React from 'react'

import { Dismissible } from '~/components/dismissible'

import { DismissibleGroupContext } from './DismissibleGroupRoot'

export type TDismissibleGroupItemProps = React.ComponentProps<
  typeof Dismissible
> & {
  value: React.ReactText
  disabled?: boolean
}

export const DismissibleGroupItem = ({
  children,
  value,
  disabled: itemDisabled = false,
  ...rest
}: React.PropsWithChildren<TDismissibleGroupItemProps>) => {
  const groupContext = React.useContext(DismissibleGroupContext)
  if (groupContext === undefined) {
    throw new Error(
      'DismissibleGroup.Item can only be used within a DismissibleGroup'
    )
  }
  const { onDismiss, disabled: groupDisabled } = groupContext
  return (
    <Dismissible
      disabled={groupDisabled || itemDisabled}
      {...rest}
      onDismiss={() => onDismiss(value)}
    >
      {children}
    </Dismissible>
  )
}
