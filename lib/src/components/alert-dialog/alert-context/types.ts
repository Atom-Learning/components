import { uid } from 'uid'
import { Button } from '~/components/button'

import { AlertDialogContent } from '../AlertDialogContent'
import { type AlertDialogTheme } from './AlertDialogIcon'

type ButtonTheme = React.ComponentProps<typeof Button>['theme']
type ButtonAppearance = React.ComponentProps<typeof Button>['appearance']

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
  confirmButtonTheme?: ButtonTheme
  confirmButtonAppearance?: ButtonAppearance
  cancelButtonTheme?: ButtonTheme
  cancelButtonAppearance?: ButtonAppearance
}
