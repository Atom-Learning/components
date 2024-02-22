import { Description, Root, Title, Trigger } from '@radix-ui/react-dialog'

import { styled } from '~/stitches'

import { DialogBackground } from './DialogBackground'
import { DialogClose } from './DialogClose'
import { DialogContent } from './DialogContent'
import { DialogFooter } from './DialogFooter'
import { DialogHeading } from './DialogHeading'

const StyledDialog = styled(Root, {})

export const Dialog = Object.assign(StyledDialog, {
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
