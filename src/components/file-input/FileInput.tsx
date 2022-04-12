import { Download } from '@atom-learning/icons'
import * as React from 'react'

import { Button, StyledButton } from '../button'
import { Icon } from '../icon'

export type FileInputProps = React.FC<
  typeof StyledButton & {
    accept?: string
    multiple?: boolean
    onSelect: (selection: FileList | null) => void
  }
>

export const FileInput: FileInputProps = ({
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
      <input
        type="file"
        onChange={handleFileSelect}
        accept={accept}
        multiple={multiple}
        hidden
      />
      <Icon is={Download} />
      {children}
    </Button>
  )
}

FileInput.displayName = 'FileInput'
