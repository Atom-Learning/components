import { uid } from 'uid'

import { AlertDialogContent } from '../AlertDialogContent'
import { type AlertDialogTheme } from './AlertDialogIcon'

export type alert = {
  id: ReturnType<typeof uid>
  title: string
  size?: React.ComponentProps<typeof AlertDialogContent>['size']
  theme?: AlertDialogTheme
  description?: string
  onAction?: (result: boolean) => void
  confirmActionText: string
  cancelActionText?: string
  showCloseButton?: boolean
}
