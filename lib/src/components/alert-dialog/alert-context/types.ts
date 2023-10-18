import { uid } from 'uid'
import { AlertDialogContent } from '../AlertDialogContent'

export type alert = {
  id: ReturnType<typeof uid>
  title: string
  size?: React.ComponentProps<typeof AlertDialogContent>['size']
  description?: string
  onAction: (result: boolean) => void
  confirmActionText: string
  cancelActionText?: string
  showCloseButton?: boolean
}
