import * as React from 'react'

import { Box, Input, Label } from '../../primitives'
import { CSSBlob } from '../../stitches'

type TextFieldProps = {
  label: string
  name: string
  css?: CSSBlob
}

export const TextField = ({
  label,
  css,
  name,
  ...props
}: TextFieldProps): React.ReactElement => {
  return (
    <Box css={css}>
      <Label htmlFor={name} css={{ mb: '$2' }}>
        {label}
      </Label>
      <Input type="text" name={name} id={name} {...props} />
    </Box>
  )
}
