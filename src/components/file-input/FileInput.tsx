import { Download } from '@atom-learning/icons'
import * as React from 'react'

import { Button, StyledButton } from '../button'
import { Icon } from '../icon'

export type FileInputProps = React.FC<
  typeof StyledButton & {
    accept?: string
    id?: string
    multiple?: boolean
    onSelect: (selection: FileList | null) => void
  }
>

export const FileInput: FileInputProps = ({
  accept,
  children,
  id = 'fileInputId',
  multiple = false,
  onSelect,
  ...rest
}) => {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    onSelect(files)
  }

  return (
    <>
      <input
        type="file"
        onChange={handleFileSelect}
        accept={accept}
        multiple={multiple}
        id={id}
        hidden
      />
      <Button as="label" htmlFor={id} {...rest}>
        <Icon is={Download} />
        {children}
      </Button>
    </>
  )
}

FileInput.displayName = 'FileInput'
