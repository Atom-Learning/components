import { Root } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled } from '~/stitches'
import { createThemeVariants } from '~/utilities'
import { passPropsToChildren } from '~/utilities/pass-props-to-children'

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
      {passPropsToChildren(children, { space }, [
        Collapsible.Trigger,
        Collapsible.Content
      ])}
    </StyledRoot>
  )
) as TCollapsible

Collapsible.Content = CollapsibleContent
Collapsible.Trigger = CollapsibleTrigger

Collapsible.displayName = 'Collapsible'
