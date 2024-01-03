import { Root } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled } from '~/stitches'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

import { TreeListItem } from './TreeListItem'

type TreeCollapsibleContextValue = {
  triggerRef?: React.MutableRefObject<HTMLElement | null>
  setTriggerRef?: (HTMLElement) => void
}
export const TreeCollapsibleContext =
  React.createContext<TreeCollapsibleContextValue>({})
const TreeCollapsibleProvider = ({ children }) => {
  const [triggerRef, setTriggerRef] = useCallbackRef()
  return (
    <TreeCollapsibleContext.Provider value={{ triggerRef, setTriggerRef }}>
      {children}
    </TreeCollapsibleContext.Provider>
  )
}

const StyledCollapsibleTreeItemRoot = styled(Root, {
  width: '100%'
})

type TreeCollapsibleProps = React.ComponentProps<typeof Root> &
  React.ComponentProps<typeof StyledCollapsibleTreeItemRoot>
export const TreeCollapsible = React.forwardRef(
  (
    props: TreeCollapsibleProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ): JSX.Element => {
    return (
      <TreeListItem ref={ref}>
        <TreeCollapsibleProvider>
          <StyledCollapsibleTreeItemRoot {...props} />
        </TreeCollapsibleProvider>
      </TreeListItem>
    )
  }
)
