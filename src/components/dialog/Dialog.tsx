import { Root, Trigger } from '@radix-ui/react-dialog'
import * as React from 'react'

import { styled } from '~/stitches'

import { DialogClose } from './DialogClose'
import { DialogContent } from './DialogContent'

const StyledDialog = styled(Root, {})

type DialogProps = React.ComponentProps<typeof StyledDialog>

export const Dialog: React.FC<DialogProps> & {
  Close: typeof DialogClose
  Content: typeof DialogContent
  Trigger: typeof Trigger
} = (props) => <StyledDialog {...props} />

Dialog.Close = DialogClose
Dialog.Content = DialogContent
Dialog.Trigger = Trigger

Dialog.displayName = 'Dialog'
