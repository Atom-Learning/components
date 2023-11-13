import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
  useFocusWithin,
  useHover,
  useInteractOutside,
  usePress
} from 'react-aria'
import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

import { ExpandableContext, useExpandableContext } from './ExpandableContext'

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

  const props = {
    children,
    ...rest,
    ...(disabled && {
      [`data-disabled`]: ''
    }),
    [`aria-expanded`]: isExpanded,
    ...expandableProps,
  }

  const Component = asChild ? Slot : 'div'

  return <Component {...props} />
})


Expandable.displayName = 'Expandable'
