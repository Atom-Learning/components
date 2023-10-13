import React from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { Tree } from '../tree'
import { Label } from '~/components/label'
import { CheckboxTreeItemContent } from './CheckboxTreeItemContent'


import { styled } from '~/stitches'

type TCheckboxTreeItemProps = React.ComponentProps<typeof Tree.Item> & React.ComponentProps<typeof CheckboxGroup.Item>

export const CheckboxTreeItem = ({
  value,
  children,
  ...rest
}: TCheckboxTreeItemProps): JSX.Element => {
  return (
    <Tree.Item {...rest}>
      <CheckboxTreeItemContent>
        <CheckboxGroup.Item value={value} />
        {children}
      </CheckboxTreeItemContent>
    </Tree.Item>
  )
}
