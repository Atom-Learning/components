import * as React from 'react'

import { Box } from '~/components/box'
import { Label } from '~/components/label'
import { Toggle } from '~/components/toggle'
import { CSS } from '~/stitches'

type ToggleFieldProps = {
  label: string
  css?: CSS
  defaultPressed?: boolean
} & React.ComponentProps<typeof Toggle>

export const ToggleField: React.FC<ToggleFieldProps> = ({
  children,
  css,
  label,
  ...remainingProps
}) => {
  return (
    <Box css={css}>
      <Label css={{ display: 'flex', alignItems: 'center' }}>
        {label}
        <Box css={{ ml: '$3' }}>
          <Toggle aria-label="toggle" />
        </Box>
      </Label>
    </Box>
  )
}

ToggleField.displayName = 'ToggleField'
