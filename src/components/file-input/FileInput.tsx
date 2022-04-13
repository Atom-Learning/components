import { Upload } from '@atom-learning/icons'
import * as React from 'react'

import { Button } from '../button'
import { Icon } from '../icon'

export type FileInputProps = React.ComponentProps<typeof Button> & {
  onSelect: (selection: FileList | null) => void
  accept?: string
  multiple?: boolean
}

export const FileInput: React.FC<FileInputProps> = ({
  accept,
  children,
  multiple = false,
  onSelect,
  ...rest
}) => {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    onSelect(files)
  }

  return (
    <Button as="label" {...rest}>
      <Icon is={Upload} />
      {children}
      <input
        type="file"
        onChange={handleFileSelect}
        accept={accept}
        multiple={multiple}
        hidden
      />
    </Button>
  )
}

FileInput.displayName = 'FileInput'
