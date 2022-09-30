import { Root } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { styled, theme } from '~/stitches'

import { CollapsibleContent } from './Collapsible.Content'
import { CollapsibleTrigger } from './Collapsible.Trigger'

const space = Object.keys(theme.space).reduce(
  (acc, key) => ({
    ...acc,
    [key]: {
      '& > button': {
        p: `$space$${key}`
      },
      '& > div': {
        p: `0 $space$${key} $space$${key} $space$${key}`,
        '& hr': {
          mt: 0,
          mb: `calc($space$${key} + $2)`
        }
      }
    }
  }),
  {}
)

const StyledRoot = styled(Root, {
  variants: {
    space: {
      ...space,
      false: {}
    }
  }
})

type TCollapsible = React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledRoot>
> & {
  Content: typeof CollapsibleContent
  Trigger: typeof CollapsibleTrigger
}

export const Collapsible = React.forwardRef(
  ({ children, css, ...props }, ref) => (
    <StyledRoot ref={ref} css={{ width: '100%', ...css }} {...props}>
      {children}
    </StyledRoot>
  )
) as TCollapsible

Collapsible.Content = CollapsibleContent
Collapsible.Trigger = CollapsibleTrigger
