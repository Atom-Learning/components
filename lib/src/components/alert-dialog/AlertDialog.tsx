import {
  Action,
  Cancel,
  Description,
  Root,
  Title,
  Trigger
} from '@radix-ui/react-alert-dialog'
import * as React from 'react'

import { styled } from '~/stitches'

import { AlertDialogContent } from './AlertDialogContent'

const StyledAlertDialog = styled(Root, {})

export const AlertDialog = Object.assign(StyledAlertDialog, {
  Description: Description,
  Title: Title,
  Action: Action,
  Cancel: Cancel,
  Content: AlertDialogContent,
  Trigger: Trigger
})

AlertDialog.displayName = 'AlertDialog'
