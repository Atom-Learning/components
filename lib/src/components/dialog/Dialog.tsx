import { Description, Root, Title, Trigger } from '@radix-ui/react-dialog'
import * as React from 'react'

import { styled } from '~/stitches'

import { DialogBackground } from './DialogBackground'
import { DialogClose } from './DialogClose'
import { DialogContent } from './DialogContent'
import { DialogFooter } from './DialogFooter'
import { DialogHeading } from './DialogHeading'

const StyledDialog = styled(Root, {})

type DialogContextValue = {
  defaultOpen: React.ComponentProps<typeof StyledDialog>['defaultOpen'],
  open: React.ComponentProps<typeof StyledDialog>['open'],
  onOpenChange: React.ComponentProps<typeof StyledDialog>['onOpenChange']
}
export const DialogContext = React.createContext<DialogContextValue>({
  defaultOpen: undefined,
  open: undefined,
  onOpenChange: undefined
})

const DialogComponent = ({
  defaultOpen,
  open,
  onOpenChange,
  ...rest
}: React.ComponentProps<typeof StyledDialog>) => {
  const [internalOpen, setInternalOpen] = React.useState(open || defaultOpen)
  const handleOnOpenChange = React.useCallback((newOpen) => {
    setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
  }, [onOpenChange])
  const value = React.useMemo<DialogContextValue>(
    () => ({ defaultOpen, open: open || internalOpen, onOpenChange: handleOnOpenChange }),
    [defaultOpen, open, internalOpen, handleOnOpenChange]
  )
  return <DialogContext.Provider value={value}><StyledDialog {...value} {...rest} /></DialogContext.Provider>
}

export const Dialog = Object.assign(DialogComponent, {
  Background: DialogBackground,
  Close: DialogClose,
  Content: DialogContent,
  Heading: DialogHeading,
  Footer: DialogFooter,

  Description: Description,
  Title: Title,
  Trigger: Trigger
})

Dialog.displayName = 'Dialog'
