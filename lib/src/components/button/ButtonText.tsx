import * as React from 'react'

import { Text } from '~/components/text'
import { styled } from '~/stitches'
import { useCallbackRefState } from '~/utilities/hooks/useCallbackRef'
import { useResizeObserver } from '~/utilities/hooks/useResizeObserver'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { ButtonContext } from './Button.context'

/*
 * Instead of sticking a resize observer on every `ButtonText`
 * regardless of overflow type, split the resize logic into a component.
 * Basically call the hook conditionally, only for the version with
 * the `overflow === 'ellipsis'` which needs it.
 * This saves us from initialising a resize observer for any button which doesn't need it.
 */
const ObserveButtonTextOverflow: React.VFC<{ elRef: HTMLElement | null }> = ({
  elRef
}) => {
  const { setIsOverflowing } = React.useContext(ButtonContext)

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

const StyledButtonText = styled(Text, {
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

type TButtonTextProps = React.ComponentProps<typeof StyledButtonText>

const toTextSize = {
  xs: 'sm',
  sm: 'md',
  md: 'md'
}

export const ButtonText = ({
  children,
  ...rest
}: TButtonTextProps): JSX.Element => {
  // We need the return type here. Otherwise typsecript breaks when this type is used in Button. Do not remove unless you want to tackle that issue again.
  const { size: buttonSize, overflow } = React.useContext(ButtonContext)

  const size = React.useMemo(
    () => overrideStitchesVariantValue(buttonSize, (s) => toTextSize[s]),
    [buttonSize]
  )

  const [elRef, setElRef] = useCallbackRefState()

  return (
    <>
      {overflow === 'ellipsis' && <ObserveButtonTextOverflow elRef={elRef} />}
      <StyledButtonText
        noCapsize
        size={size}
        overflow={overflow}
        ref={setElRef}
        {...rest}
      >
        {children}
      </StyledButtonText>
    </>
  )
}
