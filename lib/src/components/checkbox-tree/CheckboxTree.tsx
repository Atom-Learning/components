import React from 'react'

import { styled } from '~/stitches'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { CheckboxTreeCollapsible } from './CheckboxTreeCollapsible'
import { CheckboxTreeCollapsibleContent } from './CheckboxTreeCollapsibleContent'
import { CheckboxTreeCollapsibleTrigger } from './CheckboxTreeCollapsibleTrigger'
import { CheckboxTreeItem } from './CheckboxTreeItem'

type TCheckboxTreeProps = React.ComponentProps<typeof Tree>

type TCheckboxTreeType = React.FC<TCheckboxTreeProps> & {
  Collapsible: typeof CheckboxTreeCollapsible
  CollapsibleContent: typeof CheckboxTreeCollapsibleContent
  CollapsibleTrigger: typeof CheckboxTreeCollapsibleTrigger
  Item: typeof CheckboxTreeItem
}

export const CheckboxTree = (({ children, ...rest }) => {
  return (
    <CheckboxGroup><Tree {...rest}>{children}</Tree></CheckboxGroup>
  )
}) as TCheckboxTreeType

CheckboxTree.Collapsible = CheckboxTreeCollapsible
CheckboxTree.CollapsibleContent = CheckboxTreeCollapsibleContent
CheckboxTree.CollapsibleTrigger = CheckboxTreeCollapsibleTrigger
CheckboxTree.Item = CheckboxTreeItem
