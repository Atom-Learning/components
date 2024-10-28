import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { styled } from '~/stitches'
import { useCallbackRefState } from '~/utilities/hooks/useCallbackRef'

import { Box } from '../box'
import { Text } from '../text'

const StyledSlot = styled(Slot)

type KeyboardEventWindowOrElement =
  | KeyboardEvent
  | React.KeyboardEvent<HTMLDivElement>
type ShortcutConfig = Partial<KeyboardEvent>

type KeyboardShortcutProps = React.ComponentProps<typeof Box> & {
  asChild?: boolean
  config: {
    shortcut: ShortcutConfig
    action: ({
      event,
      shortcut
    }: {
      event: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>
      shortcut: ShortcutConfig
    }) => void
  }[]
  targetWindow?: boolean
  onKeyDown?: (e: KeyboardEventWindowOrElement) => void
}

export const KeyboardShortcut: React.ForwardRefExoticComponent<KeyboardShortcutProps> =
  React.forwardRef(
    ({ asChild, config, targetWindow = false, onKeyDown, ...rest }, ref) => {
      const [targetElRef, setTargetElRef] = useCallbackRefState()
      React.useImperativeHandle(ref, () => targetElRef as HTMLDivElement)

      const handleOnKeydown = React.useCallback(
        (e: KeyboardEventWindowOrElement) => {
          config.forEach(({ shortcut, action }) => {
            if (
              Object.entries(shortcut).every(([key, value]) => e[key] === value)
            )
              action({ event: e, shortcut })
          })
          onKeyDown?.(e)
        },
        [config, onKeyDown]
      )

      React.useEffect(() => {
        if (targetWindow) window.addEventListener('keydown', handleOnKeydown)

        return () => {
          window.removeEventListener('keydown', handleOnKeydown)
        }
      }, [targetWindow, handleOnKeydown])

      const Component = asChild ? StyledSlot : Box

      return (
        <Component
          onKeyDown={targetWindow ? undefined : handleOnKeydown}
          ref={setTargetElRef}
          {...rest}
        />
      )
    }
  )

KeyboardShortcut.displayName = 'KeyboardShortcut'

const StyledKeyboardShortcutIndicator = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text, {
  bg: '$grey100',
  color: '$textSubtle',
  px: '$2',
  py: '$0',
  minWidth: '$2',
  minHeight: '$2',
  fontWeight: 400,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$1',
  flexShrink: 0
})

type KeyboardShortcutIndicatorProps = React.ComponentProps<
  typeof StyledKeyboardShortcutIndicator
>

export const KeyboardShortcutIndicator = (
  props: KeyboardShortcutIndicatorProps
) => {
  return <StyledKeyboardShortcutIndicator size="sm" as="kbd" {...props} />
}

KeyboardShortcutIndicator.displayName = 'KeyboardShortcut'
