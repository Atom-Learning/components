import * as React from 'react'
import { Trigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContext } from './DropdownMenu.context'
import { generateTypeaheadEvent } from '../../utilities/event'

import { styled } from '~/stitches'

const StyledTrigger = styled(Trigger, {})

export const DropdownMenuTypeaheadTrigger = ({ onKeyDown, ...rest }: React.ComponentProps<typeof StyledTrigger>) => {
  const { setIsOpen, contentRef } = React.useContext(DropdownMenuContext)

  const handleOnKeyDown = (e) => {
    generateTypeaheadEvent({
      targetElement: contentRef,
      onBefore: () => setIsOpen(true),
    })(e)

    onKeyDown?.(e)
  }

  return <StyledTrigger onKeyDown={handleOnKeyDown} {...rest} />
}
