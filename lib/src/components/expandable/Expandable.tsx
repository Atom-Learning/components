import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
  useFocusWithin,
  useHover,
  useInteractOutside,
  usePress
} from 'react-aria'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

import { styled } from '~/stitches'

import { ExpandableContext, useExpandableContext } from './ExpandableContext'

const SIZE_COLLAPSED = '88px'
const SIZE_EXPANDED = '256px'

// const Root = styled('div', {
//   // willChange: 'width',
//   // '@allowMotion': {
//   //   transition: 'width 125ms ease-out, box-shadow 125ms ease-out'
//   // },
//   variants: {
//     isExpanded: {
//       true: {
//         boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0.1)', // ughhhh
//         width: SIZE_EXPANDED
//       },
//       false: { width: SIZE_COLLAPSED }
//     }
//   }
// })

const PointerBlocker = styled('div', {
  position: 'absolute',
  inset: 0,
  transition: 'visibility',
  variants: {
    isVisible: {
      true: { visibility: 'visible', transitionDelay: '0s' },
      false: { visibility: 'hidden', transitionDelay: '50ms' }
    }
  }
})


export const ExpandableProvider: React.FC<ExpandableContextProps> = ({
  disabled,
  expanded: forceExpanded,
  defaultExpanded = false,
  onExpandedChange,
  children
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)
  React.useEffect(() => { setIsExpanded(forceExpanded) }, [forceExpanded])
  const value = React.useMemo(
    () => ({ disabled, isExpanded, setIsExpanded }),
    [disabled, isExpanded, onExpandedChange])

  return (
    <ExpandableContext.Provider value={value}>
      elo
      {children}
    </ExpandableContext.Provider>
  )
}

const withExpandableProvider = (WrappedComponent) => ({ disabled, expanded, defaultExpanded, onExpandedChange, ...rest }) => {
  return (
    <ExpandableProvider disabled={disabled} expanded={expanded} defaultExpanded={defaultExpanded} onExpandedChange={onExpandedChange}>
      <WrappedComponent {...rest} />
    </ExpandableProvider>
  )
}
export const Expandable = withExpandableProvider(({
  asChild,
  children,
  ...rest
}: ExpandableProps) => {
  const { disabled, isExpanded, setIsExpanded } = useExpandableContext()
  const [elRef, setElRef] = useCallbackRef()

  useInteractOutside({
    ref: elRef,
    onInteractOutside: () => setIsExpanded(false)
  })
  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => setIsExpanded(true),
    onBlurWithin: () => setIsExpanded(false)
  })
  const { hoverProps, isHovered } = useHover({
    onHoverStart: () => setIsExpanded(true),
    onHoverEnd: () => setIsExpanded(false)
  })
  const { pressProps } = usePress({
    onPress: () => setIsExpanded(true)
  })

  const expandableProps = disabled ? {} : { ...focusWithinProps, ...hoverProps, ...pressProps, ref: setElRef }

  console.log({ children: React.Children.toArray(children) })
  {/**
    * When the Expandable is collapsed, ensure that the initial tap event
    * is used to expand the nav first before making the items available
    */}
  const props = {
    children,
    ...rest,
    ...(disabled && {
      [`data-disabled`]: '',
      // children: React.Children.toArray(children)[0].props.children.push(<PointerBlocker isVisible={!isHovered && !isExpanded} />)
    }),
    [`aria-expanded`]: isExpanded,
    ...expandableProps,
  }

  const Component = asChild ? Slot : 'div'

  return <Component {...props} />
})


Expandable.displayName = 'Expandable'
