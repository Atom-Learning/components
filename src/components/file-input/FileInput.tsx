import { Download } from '@atom-learning/icons'
import { CSS } from '@stitches/react'
import * as React from 'react'

import { Button } from '../button'
import { Icon } from '../icon'

export type FileInputProps = {
  onSelect: (selection: FileList) => void
  id: string
  accept?: string
  multiple?: boolean
  appearance?: string
  css?: CSS
}

export const FileInput: React.FC<FileInputProps> = ({
  onSelect,
  accept,
  multiple,
  id,
  appearance = 'outline',
  css,
  children
}) => {
  const [fileSelection, setFileSelection] = React.useState<FileList>()

  React.useEffect(() => {
    onSelect(fileSelection)
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
        data-testid="file-upload"
        hidden
      />
      <Button as="label" htmlFor={id} appearance={appearance} css={css}>
        <Icon is={Download} />
        {children}
      </Button>
    </>
  )
}

FileInput.displayName = 'FileInput'
