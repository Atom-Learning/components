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
  const Field = () => (
    <>
      <Label htmlFor={name} css={{ mb: '$2' }}>
        {label}
      </Label>
      <Input name={name} id={name} {...props} />
    </>
  )

  return css ? (
    <Box css={css}>
      <Field />
    </Box>
  ) : (
    <Field />
  )
}

InputField.defaultProps = {
  type: 'text'
}
