import React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'

const StyledNavigationMenuVerticalText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  fontWeight: 'var(--navigation-menu-vertical-item-font-weight)',
  ['[aria-expanded] &']: {
    opacity: 0,
    transition: 'opacity 150ms ease-out, transform 150ms ease-out',
    transform: 'translate(8px)',
    whiteSpace: 'nowrap'
  },
  ['[aria-expanded="true"] &']: {
    opacity: 1,
    transform: 'translate(0)'
  }
})

type TStyledNavigationMenuVerticalTextProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalText
>

export const NavigationMenuVerticalText = (
  props: TStyledNavigationMenuVerticalTextProps
): JSX.Element => {
  return <StyledNavigationMenuVerticalText size="md" as="span" {...props} />
}
