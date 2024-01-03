import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'

type CheckboxTreeCollapsibleContentProps = Omit<
  React.ComponentProps<typeof Tree.CollapsibleContent>,
  'asChild'
>

export const CheckboxTreeCollapsibleContent = ({
  children,
  ...rest
}: CheckboxTreeCollapsibleContentProps): JSX.Element => {
  return (
    <CheckboxGroup.Sub asChild>
      <Tree.CollapsibleContent {...rest} forceMount>
        {children}
      </Tree.CollapsibleContent>
    </CheckboxGroup.Sub>
  )
}
