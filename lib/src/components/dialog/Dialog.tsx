import { Description, Root, Title, Trigger } from '@radix-ui/react-dialog'
import * as React from 'react'

import { styled } from '~/stitches'

import { DialogBackground } from './DialogBackground'
import { DialogClose } from './DialogClose'
import { DialogContent } from './DialogContent'
import { DialogFooter } from './DialogFooter'
import { DialogHeading } from './DialogHeading'

const StyledDialog = styled(Root, {})

type DialogProps = React.ComponentProps<typeof StyledDialog>

export const Dialog: React.FC<DialogProps> & {
  Background: typeof DialogBackground
  Close: typeof DialogClose
  Content: typeof DialogContent
  Heading: typeof DialogHeading
  Footer: typeof DialogFooter
  Description: typeof Description
  Title: typeof Title
  Trigger: typeof Trigger
} = (props) => <StyledDialog {...props} />

Dialog.Background = DialogBackground
Dialog.Close = DialogClose
Dialog.Content = DialogContent
Dialog.Heading = DialogHeading
Dialog.Footer = DialogFooter

Dialog.Description = Description
Dialog.Title = Title
Dialog.Trigger = Trigger

Dialog.displayName = 'Dialog'
