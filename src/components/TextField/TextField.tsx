import * as React from 'react'

import { Box, Input } from '../../primitives'
import { CSSBlob } from '../../stitches'

type TextFieldProps = {
  label: string
  name: string
  css: CSSBlob
}

export const TextField = ({
  label,
  css,
  name,
  ...props
}: TextFieldProps): React.ReactElement => {
  return (
    <Box css={css}>
      <label htmlFor={name}>{label}</label>
      <Input type="text" name={name} id={name} {...props} />
    </Box>
  )
}
