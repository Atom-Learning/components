import React from 'react'

import { Tree } from '../tree'
import { CheckboxGroup } from '../checkbox-group'

import { styled } from '~/stitches'

type TCheckboxTreeCollapsibleContentProps = React.ComponentProps<
  typeof Tree.CollapsibleContent
>

export const CheckboxTreeCollapsibleContent = ({
  children,
  ...rest
}: TCheckboxTreeCollapsibleContentProps): JSX.Element => {
  return (

    <Tree.CollapsibleContent {...rest} forceMount>
      <CheckboxGroup>
        {children}

      </CheckboxGroup>
    </Tree.CollapsibleContent>

  )
}
