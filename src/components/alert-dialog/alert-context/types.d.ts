import { uid } from 'uid'

export type alert = {
  id: ReturnType<typeof uid>
  title: string
  description?: string
  onAction: (result: boolean) => void
  confirmActionText: string
  cancelActionText: string
}
