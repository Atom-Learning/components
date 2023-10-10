import React from 'react'

import { Tree } from '../tree'
import { CheckboxGroup } from '../checkbox-group'

import { styled } from '~/stitches'

type TCheckboxTreeCollapsibleProps = React.ComponentProps<
  typeof Tree.Collapsible
>

export const CheckboxTreeCollapsible = ({
  children,
  ...rest
}: TCheckboxTreeCollapsibleProps): JSX.Element => {
  return (

    <Tree.Collapsible {...rest}>
      <CheckboxGroup>
        {children}
      </CheckboxGroup>
    </Tree.Collapsible>
  )
}
