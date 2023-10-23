import * as React from 'react'
import { uid } from 'uid'

import { AlertDialogContent } from '../AlertDialogContent'
import { AlertDialogTheme } from './AlertDialogIcon'

type AlertCommonProps = {
  id: ReturnType<typeof uid>
  title: string
  size?: React.ComponentProps<typeof AlertDialogContent>['size']
  theme?: AlertDialogTheme
  description?: string
}

type AlertActions =
  | {
      onAction?: (result: boolean) => void
      confirmActionText: string
      cancelActionText?: string
      confirmElement?: never
      cancelElement?: never
    }
  | {
      onAction?: never
      confirmActionText?: never
      cancelActionText?: never
      confirmElement: React.ReactNode
      cancelElement?: React.ReactNode
    }

export type alert = AlertCommonProps & AlertActions
