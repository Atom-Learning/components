import { Download } from '@atom-learning/icons'
import { CSS } from '@stitches/react'
import * as React from 'react'

import { Button } from '../button'
import { Icon } from '../icon'

export type FileInputProps = {
  onSelect: (selection: FileList) => void
  id: string
  label: string
  accept?: string
  multiple?: boolean
  appearance?: string
  css?: CSS
  icon?: SVGSVGElement
}

export const FileInput: React.FC<FileInputProps> = ({
  onSelect,
  label,
  accept,
  multiple,
  id,
  appearance = 'outline',
  icon,
  css
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
        {label}
      </Button>
    </>
  )
}

FileInput.displayName = 'FileInput'
