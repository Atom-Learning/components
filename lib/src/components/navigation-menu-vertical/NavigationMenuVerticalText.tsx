import React from 'react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import { Text } from '~/components/text'
import { styled } from '~/stitches'

import { useExpandableContext } from '../expandable'
const StyledNavigationMenuVerticalText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  fontWeight: 'var(--navigation-menu-vertical-item-font-weight)',
  lineHeight: 1.2,
  willChange: 'width',

  transition: 'width 125ms ease-out',
})

type TStyledNavigationMenuVerticalTextProps = React.ComponentProps<
  typeof StyledNavigationMenuVerticalText
>

export const NavigationMenuVerticalText = (
  props: TStyledNavigationMenuVerticalTextProps
): JSX.Element => {
  const { isExpanded } = useExpandableContext()

  if (!isExpanded) return <VisuallyHidden {...props} />
  return (
    <StyledNavigationMenuVerticalText
      size="md"
      as="span"
      {...props}
    />
  )
}
