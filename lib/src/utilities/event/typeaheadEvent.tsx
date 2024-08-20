import * as React from 'react'

export const generateTypeaheadEvent = ({ targetElement, onBefore, onAfter }: { targetElement?: HTMLElement, onBefore?: () => void, onAfter?: () => void }): React.KeyboardEventHandler<HTMLElement> =>
  (event: React.KeyboardEvent) => {
    if (!targetElement) return

    const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
    if (isModifierKey) return

    const isCharacterKey = event.key.length === 1;
    if (!isCharacterKey) return


    console.log({ targetElement, isModifierKey, isCharacterKey })


    onBefore?.()

    const newEvent = new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: event.key,
      code: event.code
    });

    setTimeout(() => {
      targetElement.dispatchEvent(newEvent)
      onAfter?.()
    }, 0)

  }

