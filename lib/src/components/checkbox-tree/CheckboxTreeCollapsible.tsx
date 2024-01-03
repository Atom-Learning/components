import React from 'react'
import { Tree } from '../tree'
import { CheckboxGroup } from '../checkbox-group'

type CheckboxTreeCollapsibleProps = Omit<
  React.ComponentProps<typeof Tree.Collapsible> &
    React.ComponentProps<typeof CheckboxGroup.Sub>,
  'asChild'
>

export const CheckboxTreeCollapsible = ({
  children,
  ...rest
}: CheckboxTreeCollapsibleProps): JSX.Element => {
  return (
    <CheckboxGroup.Sub asChild>
      <Tree.Collapsible {...rest}>{children}</Tree.Collapsible>
    </CheckboxGroup.Sub>
  )
}
