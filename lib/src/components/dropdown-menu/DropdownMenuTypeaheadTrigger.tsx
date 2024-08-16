import * as React from 'react'
import { Trigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContext } from './DropdownMenu.context'

import { styled } from '~/stitches'

const StyledTrigger = styled(Trigger, {})

export const DropdownMenuTypeaheadTrigger = (props) => {
  const { setIsOpen, contentRef } = React.useContext(DropdownMenuContext)

  const handleOnKeyDown = (e) => {
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;

    if (!isModifierKey && isCharacterKey) {
      setIsOpen(true)

      const event = new KeyboardEvent('keydown', {
        view: window,
        bubbles: true,
        cancelable: true,
        key: e.key,
        code: e.code
      });

      setTimeout(() => {
        const contentElement = contentRef?.current
        if (contentElement) contentElement.dispatchEvent(event)
      }, 0)
    }
  }

  return <StyledTrigger onKeyDown={handleOnKeyDown} {...props} />
}
