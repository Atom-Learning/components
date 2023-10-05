import { Content } from '@radix-ui/react-collapsible'
import React from 'react'

import { styled } from '~/stitches'

import { TreeCollapsibleContext } from './TreeCollapsible'
import { TreeList } from './TreeList'

const StyledTreeCollapsibleContent = styled(Content, {})

type TTreeCollapsibleContentProps = React.ComponentProps<
  typeof StyledTreeCollapsibleContent
> &
  React.ComponentProps<typeof TreeList>

export const TreeCollapsibleContent = ({
  children,
  ...rest
}: TTreeCollapsibleContentProps): JSX.Element => {
  const { triggerRef } = React.useContext(
    TreeCollapsibleContext
  )

  const handleOnKeydown = (e) => {
    if (!triggerRef?.current) return
    if (e.key === 'Escape') {
      e.stopPropagation()
      e.preventDefault()
      triggerRef.current.focus()
      triggerRef.current.click()
    }
  }

  return (
    <StyledTreeCollapsibleContent onKeyDown={handleOnKeydown} {...rest}>
      <TreeList>{children}</TreeList>
    </StyledTreeCollapsibleContent>
  )
}
