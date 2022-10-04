import { Root } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'

import { CollapsibleContent } from './Collapsible.Content'
import { CollapsibleTrigger } from './Collapsible.Trigger'

const StyledRoot = styled(Root, {
  width: '100%',
  variants: { space: createThemeVariants('space', {}) }
})

type TCollapsible = React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledRoot>
> & {
  Content: typeof CollapsibleContent
  Trigger: typeof CollapsibleTrigger
}

export const Collapsible = React.forwardRef(
  ({ children, space, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      {React.Children.map(children, (child) => {
        if (
          !React.isValidElement(child) ||
          (child.type !== Collapsible.Trigger &&
            child.type !== Collapsible.Content)
        )
          throw new Error(
            `Only ${Collapsible.Trigger.displayName} and ${Collapsible.Content.displayName} are valid children for ${Collapsible.displayName}.`
          )

        return React.cloneElement(
          child as React.ReactElement<
            React.ComponentProps<
              typeof Collapsible.Trigger | typeof Collapsible.Content
            >
          >,
          { space: child.props.space || space }
        )
      })}
    </StyledRoot>
  )
) as TCollapsible

Collapsible.Content = CollapsibleContent
Collapsible.Trigger = CollapsibleTrigger

Collapsible.displayName = 'Collapsible'
