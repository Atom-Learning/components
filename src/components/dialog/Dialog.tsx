import { Close, Root } from '@radix-ui/react-dialog'
import * as React from 'react'

import { styled } from '~/stitches'

import { DialogContent } from './DialogContent'
import { DialogTrigger } from './DialogTrigger'

const StyledDialog = styled(Root, {})
const StyledClose = styled(Close, {})

type DialogProps = React.ComponentProps<typeof StyledDialog>

export const Dialog: React.FC<DialogProps> & {
  Close: typeof StyledClose
  Content: typeof DialogContent
  Trigger: typeof DialogTrigger
} = (props) => <StyledDialog {...props} />

Dialog.Close = StyledClose
Dialog.Content = DialogContent
Dialog.Trigger = DialogTrigger

Dialog.displayName = 'Dialog'
