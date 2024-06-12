import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../text'

const StyledKeyboardShortcut = styled(Text, {
  color: '$grey800'
})

type UseKeyboardShortcutProps = {
  targetRef?: any, // huh???
  onKeydown: React.EventHandler<React.SyntheticEvent<KeyboardEvent>>
}

export const useKeyboardShortcut = ({ onKeydown, targetRef }: UseKeyboardShortcutProps): void => {
  React.useEffect(() => {
    if (!onKeydown) return

    console.log(1)

    const eventTarget = targetRef || window

    if (!eventTarget) return
    console.log(2, eventTarget)

    eventTarget.addEventListener('keydown', onKeydown)

    return () => {
      eventTarget.removeEventListener('keydown', onKeydown)
    }
  }, [onKeydown, targetRef])
}

type KeyboardShortcutProps = UseKeyboardShortcutProps & React.ComponentProps<typeof Text>

export const KeyboardShortcut = React.memo(({ onKeydown, targetRef, ...rest }: KeyboardShortcutProps): JSX.Element => {
  useKeyboardShortcut({ onKeydown, targetRef })
  return (
    <StyledKeyboardShortcut {...rest} />
  )
})


KeyboardShortcut.displayName = 'KeyboardShortcut'
