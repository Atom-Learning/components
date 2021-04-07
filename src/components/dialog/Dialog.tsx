import { Root } from '@radix-ui/react-dialog'
import * as React from 'react'

import { styled } from '~/stitches'

import { DialogClose } from './DialogClose'
import { DialogContent } from './DialogContent'
import { DialogTrigger } from './DialogTrigger'

const StyledDialog = styled(Root, {})

type DialogProps = React.ComponentProps<typeof StyledDialog>

export const Dialog: React.FC<DialogProps> & {
  Close: typeof DialogClose
  Content: typeof DialogContent
  Trigger: typeof DialogTrigger
} = (props) => <StyledDialog {...props} />

Dialog.Close = DialogClose
Dialog.Content = DialogContent
Dialog.Trigger = DialogTrigger

Dialog.displayName = 'Dialog'
