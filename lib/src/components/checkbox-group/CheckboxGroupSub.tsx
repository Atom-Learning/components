import * as React from 'react'

import { CheckboxGroupMountedProvider } from './CheckboxGroup.context'
import { Box } from '../box'

type CheckboxGroupSubProps = React.ComponentProps<typeof Box>

export const CheckboxGroupSub = (props: CheckboxGroupSubProps): JSX.Element => (
  <CheckboxGroupMountedProvider>
    <Box {...props} />
  </CheckboxGroupMountedProvider>
)
