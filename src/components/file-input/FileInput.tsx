import { Download } from '@atom-learning/icons'
import * as React from 'react'

import { Button } from '../button'
import { Icon } from '../icon'

export type FileInputProps = typeof Button & {
  onSelect: (selection: FileList) => void
  id: string // TODO: make optiona and add default
  accept?: string // TODO rename
  multiple?: boolean
}

export const FileInput: React.FC<FileInputProps> = ({
  onSelect,
  accept,
  multiple = false,
  id,
  children,
  ...rest
}) => {
  const [fileSelection, setFileSelection] = React.useState<FileList>()

  React.useEffect(() => {
    onSelect(fileSelection) // TODO: TS errors
  }, [fileSelection, onSelect])

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileSelection(event.target.files)
  }

  return (
    <>
      <input
        type="file"
        onChange={handleFileSelect}
        accept={accept}
        multiple={multiple}
        id={id}
        data-testid="file-upload" // TODO: remove
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
