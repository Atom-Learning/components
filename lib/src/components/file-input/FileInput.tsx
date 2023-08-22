import { Upload } from '@atom-learning/icons'
import * as React from 'react'

import { Button } from '../button'
import { Icon } from '../icon'

export type FileInputProps = React.ComponentProps<typeof Button> & {
  onFileSelect: (selection: FileList | null) => void
  accept?: string
  multiple?: boolean
}

export const FileInput: React.FC<FileInputProps> = ({
  accept,
  children,
  multiple = false,
  onFileSelect,
  ...rest
}) => {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    onFileSelect(files)
  }

  return (
    <Button {...rest} asChild>
      <label>
        <Icon is={Upload} />
        {children}
        <input
          type="file"
          onChange={handleFileSelect}
          accept={accept}
          multiple={multiple}
          hidden
        />
      </label>
    </Button>
  )
}

FileInput.displayName = 'FileInput'
