import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { CheckboxTreeItemContent } from './CheckboxTreeItemContent'


import { styled } from '~/stitches'


type TCheckboxGroupCollapsibleTriggerProps = React.ComponentProps<
  typeof Tree.CollapsibleTrigger
>

export const CheckboxTreeCollapsibleTrigger = ({
  children,
  ...rest
}: TCheckboxGroupCollapsibleTriggerProps): JSX.Element => {
  return (
    <Tree.CollapsibleTrigger {...rest}>
      <CheckboxTreeItemContent>
        <CheckboxGroup.AllItem css={{ alignSelf: 'flex-start' }} />
        {children}
      </CheckboxTreeItemContent>
    </Tree.CollapsibleTrigger>
  )
}
