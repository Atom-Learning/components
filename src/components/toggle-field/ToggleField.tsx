import * as React from 'react'
import { FieldWrapper } from '~/components/field-wrapper'

import { Box } from '~/components/box'
import { Label } from '~/components/label'
import { Toggle } from '~/components/toggle'
import { CSS } from '~/stitches'

type ToggleFieldProps = {
  label: string
  css?: CSS
  defaultPressed?: boolean
  leftState?: string
  rightState?: string
} & React.ComponentProps<typeof Toggle>

export const ToggleStates = ({ children, leftState, rightState }) => {
  return (
    <>
      {leftState && <Label>{leftState}</Label>}
      {children}
      {rightState && <Label>{rightState}</Label>}
    </>
  )
}

export const ToggleField: React.FC<ToggleFieldProps> = ({
  children,
  css,
  label,
  leftState,
  rightState,
  ...remainingProps
}) => {
  return (
    <FieldWrapper label="Example Field" fieldId="example">
      <Box css={{ display: 'flex', alignItems: 'center' }}>
        <ToggleStates leftState={leftState} rightState={rightState}>
          <Toggle aria-label="toggle" {...remainingProps} />
        </ToggleStates>
      </Box>
    </FieldWrapper>
  )
}

ToggleField.displayName = 'ToggleField'
