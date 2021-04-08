import {
  Action,
  Cancel,
  Description,
  Root,
  Title
} from '@radix-ui/react-alert-dialog'
import * as React from 'react'

import { styled } from '~/stitches'

import { AlertDialogContent } from './AlertDialogContent'
import { AlertDialogTrigger } from './AlertDialogTrigger'

const StyledAlertDialog = styled(Root, {})

type AlertDialogProps = React.ComponentProps<typeof StyledAlertDialog>

export const AlertDialog: React.FC<AlertDialogProps> & {
  Content: typeof AlertDialogContent
  Trigger: typeof AlertDialogTrigger
  Description: typeof Description
  Title: typeof Title
  Action: typeof Action
  Cancel: typeof Cancel
} = (props) => <StyledAlertDialog {...props} />

AlertDialog.Description = Description
AlertDialog.Title = Title
AlertDialog.Action = Action
AlertDialog.Cancel = Cancel
AlertDialog.Content = AlertDialogContent
AlertDialog.Trigger = AlertDialogTrigger

AlertDialog.displayName = 'AlertDialog'
