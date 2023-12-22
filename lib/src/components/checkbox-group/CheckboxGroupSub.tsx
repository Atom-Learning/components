import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { styled } from '~/stitches'
import { CheckboxGroupMountedProvider } from './CheckboxGroup.context'
import { Box } from '../box'

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
