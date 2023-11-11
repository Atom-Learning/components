import React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'

import { useExpandableContext } from '../expandable'

const SIZE_EXPANDED_MAX = '160px'

/*
'@allowMotion': {
    transition: 'maxWidth 125ms ease-out'
  },
  */
const StyledNavigationMenuVerticalText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  fontWeight: 'var(--navigation-menu-vertical-item-font-weight)',
  lineHeight: 1.2,
  willChange: 'width',

  transition: 'width 125ms ease-out',

  variants: {
    isExpanded: {
      true: {
        width: SIZE_EXPANDED_MAX
      },
      false: {
        width: 0,
        textWrap: 'nowrap'
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
  const { isExpanded } = useExpandableContext()
  console.log({ isExpanded })
  return (
    <StyledNavigationMenuVerticalText
      size="md"
      as="span"
      {...props}
      isExpanded={isExpanded}
    />
  )
}
