import React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'

import { useSidebarState } from '../side-bar'

const SIZE_EXPANDED_MAX = '10rem'

const StyledNavigationMenuVerticalText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  fontWeight: 'var(--navigation-menu-vertical-item-font-weight)',
  lineHeight: 1.2,
  variants: {
    isExpanded: {
      true: {
        width: 'max-content',
        maxWidth: SIZE_EXPANDED_MAX,
        '@allowMotion': {
          opacity: 1,
          transform: 'translate(0)',
          transition: 'opacity 125ms ease-out, transform 125ms ease-out'
        }
      },
      false: {
        '@allowMotion': {
          width: 'max-content',
          maxWidth: SIZE_EXPANDED_MAX,
          opacity: 0,
          transform: 'translate(8px)',
          transition: 'opacity 125ms ease-out, transform 0ms ease-out 125ms'
        }
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
  const { isExpanded } = useSidebarState()
  return (
    <StyledNavigationMenuVerticalText
      size="md"
      as="span"
      {...props}
      isExpanded={isExpanded}
    />
  )
}
