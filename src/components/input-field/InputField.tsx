import * as React from 'react'

import { Box, Input, Label } from '../../primitives'
import { CSSBlob } from '../../stitches'

type InputFieldProps = {
  label: string
  name: string
  type: string
  css?: CSSBlob
}

export const InputField = ({
  label,
  css,
  name,
  ...props
}: InputFieldProps): React.ReactElement => {
  return (
    <Box css={css}>
      <Label htmlFor={name} css={{ mb: '$2' }}>
        {label}
      </Label>
      <Input name={name} id={name} {...props} />
    </Box>
  )
}

InputField.defaultProps = {
  type: 'text'
}
