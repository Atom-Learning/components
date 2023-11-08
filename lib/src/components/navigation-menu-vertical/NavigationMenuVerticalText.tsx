import React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'
import { useExpandable } from '../side-bar'

const StyledNavigationMenuVerticalText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  fontWeight: 'var(--navigation-menu-vertical-item-font-weight)',
  whiteSpace: 'nowrap',
  variants: {
    isExpanded: {
      true: {
        opacity: 1,
        transform: 'translate(0)',
        transition: 'opacity 150ms ease-out, transform 150ms ease-out'
      },
      false: {
        opacity: 0,
        transform: 'translate(8px)',
        transition: 'opacity 150ms ease-out, transform 0ms ease-out 150ms'
      }
    }
  }
})

type TStyledNavigationMenuVerticalTextProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalText
>

export const NavigationMenuVerticalText = (
  props: TStyledNavigationMenuVerticalTextProps
): JSX.Element => {
  const { isExpanded } = useExpandable()
  return (
    <StyledNavigationMenuVerticalText
      size="md"
      as="span"
      {...props}
      isExpanded={isExpanded}
    />
  )
}
