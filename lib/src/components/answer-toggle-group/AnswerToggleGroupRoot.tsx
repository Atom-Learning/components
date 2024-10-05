import * as React from 'react'

import { ToggleGroup } from '~/utilities/radix-overrides/toggle-group'

import { AnswerGroup } from './AnswerGroup'
import { AnswerToggleGroupContext, AnswerToggleGroupProvider } from './AnswerToggleGroup.context'

type AnswerToggleGroupRootProps = React.ComponentProps<typeof AnswerGroup> &
  React.ComponentProps<typeof ToggleGroup.Root>

export const AnswerToggleGroupRootInternal: React.ForwardRefExoticComponent<AnswerToggleGroupRootProps> =
  React.forwardRef((props, ref) => {
    const { value, setValue } = React.useContext(AnswerToggleGroupContext)

    return (
      <AnswerGroup
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Stitches polymorphic components issue due to `as={ToggleGroup.Root}`
        as={ToggleGroup.Root}
        orientation="horizontal"
        onValueChange={setValue}
        value={value}
        {...props}
      />
    )
  })

export const AnswerToggleGroupRoot: React.ForwardRefExoticComponent<AnswerToggleGroupRootProps> =
  React.forwardRef(({ type, value, defaultValue, onValueChange, ...rest }, ref) => {
    return (
      // eslint-disable-next-line
      // @ts-ignore Radix types complain on properties depending on whether `type="single"` or `"multiple"`. Works correctly so muting.
      <AnswerToggleGroupProvider type={type} value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        <AnswerToggleGroupRootInternal type={type} ref={ref} {...rest} />
      </AnswerToggleGroupProvider>
    )
  })
