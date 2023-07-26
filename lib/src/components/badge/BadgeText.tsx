import * as React from 'react'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'
import { BadgeContext } from './Badge.context'
import { Text } from '~/components/text'
import { styled } from '~/stitches'
import { useCallbackRefState } from '~/utilities/hooks/useCallbackRef'
import { useResizeObserver } from '~/utilities/hooks/useResizeObserver'

/*
 * Instead of sticking a resize observer on every `BadgeText`
 * regardless of overflow type, split the resize logic into a component.
 * Basically call the hook conditionally, only for the version with
 * the `overflow === 'ellipsis'` which needs it.
 * This saves us from initialising a resize observer for any badge which doesn't need it.
 */
const ObserveBadgeTextOverflow: React.VFC<{ elRef: HTMLElement | null }> = ({
  elRef
}) => {
  const { setIsOverflowing } = React.useContext(BadgeContext)

  useResizeObserver({
    delay: 0,
    elements: [elRef],
    onResize: () => {
      if (!elRef?.scrollWidth || !elRef?.clientWidth) return
      setIsOverflowing?.(elRef.scrollWidth > elRef.clientWidth)
    }
  })

  return null
}

const StyledBadgeText = styled(Text, {
  py: '$0',
  variants: {
    overflow: {
      ellipsis: {
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        textOverflow: 'ellipsis'
      },
      wrap: {
        whiteSpace: 'wrap'
      }
    }
  }
})

type TBadgeTextProps = React.ComponentProps<typeof StyledBadgeText>

const toTextSize = {
  xs: 'sm',
  sm: 'md',
  md: 'md'
}

export const BadgeText: React.FC<TBadgeTextProps> = ({ children, ...rest }) => {
  const { size: badgeSize, overflow } = React.useContext(BadgeContext)

  const size = React.useMemo(
    () => overrideStitchesVariantValue(badgeSize, (s) => toTextSize[s]),
    [badgeSize]
  )

  const [elRef, setElRef] = useCallbackRefState()

  return (
    <>
      {overflow === 'ellipsis' && <ObserveBadgeTextOverflow elRef={elRef} />}
      <StyledBadgeText
        noCapsize
        size={size}
        overflow={overflow}
        ref={setElRef}
        {...rest}
      >
        {children}
      </StyledBadgeText>
    </>
  )
}
