import React from 'react'

import { Tree } from '../tree'
import { CheckboxGroup } from '../checkbox-group'

type CheckboxTreeCollapsibleContentProps = React.ComponentProps<
  typeof Tree.CollapsibleContent
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
