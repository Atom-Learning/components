import { Root } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled } from '~/stitches'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

import { TreeListItem } from './TreeListItem'

type TTreeCollapsibleContextValue = {
  triggerRef?: React.MutableRefObject<HTMLElement | null>
  setTriggerRef?: (HTMLElement) => void
}
export const TreeCollapsibleContext =
  React.createContext<TTreeCollapsibleContextValue>({})
const TreeCollapsibleProvider = ({ children }) => {
  const [triggerRef, setTriggerRef] = useCallbackRef()
  return (
    <TreeCollapsibleContext.Provider
      value={{ triggerRef, setTriggerRef }}
    >
      {children}
    </TreeCollapsibleContext.Provider>
  )
}

const StyledCollapsibleTreeItemRoot = styled(Root, {
  width: '100%',
  bg: 'red'
})

type TTreeCollapsibleProps = React.ComponentProps<typeof Root> &
  React.ComponentProps<typeof StyledCollapsibleTreeItemRoot>
export const TreeCollapsible = (props: TTreeCollapsibleProps): JSX.Element => {
  return (
    <TreeListItem>
      <TreeCollapsibleProvider>
        <StyledCollapsibleTreeItemRoot {...props} />
      </TreeCollapsibleProvider>
    </TreeListItem>
  )
}
