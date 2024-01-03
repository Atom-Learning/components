import { Content } from '@radix-ui/react-collapsible'
import React from 'react'

import { styled } from '~/stitches'

import { TreeCollapsibleContext } from './TreeCollapsible'
import { TreeList } from './TreeList'

const StyledTreeCollapsibleContent = styled(Content, {
  '&[data-state="open"]': {},
  '&[data-state="closed"]': {
    display: 'none'
  }
})

type TreeCollapsibleContentProps = React.ComponentProps<
  typeof StyledTreeCollapsibleContent
> &
  React.ComponentProps<typeof TreeList>

export const TreeCollapsibleContent = React.forwardRef(
  (
    { children, ...rest }: TreeCollapsibleContentProps,
    ref: React.ForwardedRef<HTMLUListElement>
  ): JSX.Element => {
    const { triggerRef } = React.useContext(TreeCollapsibleContext)

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
      <StyledTreeCollapsibleContent
        onKeyDown={handleOnKeydown}
        {...rest}
        asChild
      >
        <TreeList ref={ref} role="group">
          {children}
        </TreeList>
      </StyledTreeCollapsibleContent>
    )
  }
)
