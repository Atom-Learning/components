import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { Label } from '~/components/label'
import { CheckboxTreeItemContent } from './CheckboxTreeItemContent'


import { styled } from '~/stitches'

type TCheckboxTreeItemProps = React.ComponentProps<
  typeof Tree.Item
>

export const CheckboxTreeItem = ({
  value,
  children,
  ...rest
}: TCheckboxTreeItemProps) => {
  return (
    <Tree.Item {...rest}>
      <CheckboxTreeItemContent>
        <CheckboxGroup.Item value={value} css={{ alignSelf: 'flex-start' }} />
        {children}
      </CheckboxTreeItemContent>
    </Tree.Item>
  )
}
