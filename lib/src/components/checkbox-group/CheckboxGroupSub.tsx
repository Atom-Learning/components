import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box'
import { CheckboxGroupMountedProvider } from './CheckboxGroup.context'

type CheckboxGroupSubProps = React.ComponentProps<typeof Box> & {
  asChild?: boolean
}
const StyledSlot = styled(Slot)

export const CheckboxGroupSub = ({
  asChild = false,
  ...rest
}: CheckboxGroupSubProps): JSX.Element => {
  const Component = asChild ? StyledSlot : Box

  return (
    <CheckboxGroupMountedProvider>
      <Component {...rest} />
    </CheckboxGroupMountedProvider>
  )
}
