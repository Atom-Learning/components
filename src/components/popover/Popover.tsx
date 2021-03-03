import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const getTriangle = (position) => {
  const size = 8
  const border = '$tonal400'

  return {
    '&::after': {
      // Pseudo-classes need to be separated ($::after, $::before: doesn't work in stitches work)
      borderStyle: 'solid',
      borderColor: 'transparent',
      content: "''", //  quotes need to be escapted as a stitches workaround for pseudoclasses
      height: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: '100%',
      width: 0,
      borderTopColor: 'white',
      borderWidth: size,
      ml: -size,
      ...position
    },
    '&::before': {
      borderStyle: 'solid',
      borderColor: 'transparent',
      content: "''",
      height: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: '100%',
      width: 0,
      borderTopColor: border,
      borderWidth: size + 1,
      ml: -(size + 1),
      ...position
    }
  }
}

const StyledPopover = styled('span', {
  position: 'relative'
})

const StyledPopoverContent = styled('div', {
  boxShadow: '$0',
  borderRadius: '$1',
  backgroundColor: 'white',
  border: '1px solid $tonal400',
  bottom: `calc(100%  + $3)`,
  listStyleType: 'none',
  minWidth: 140,
  maxWidth: 354,
  p: '$3',
  position: 'absolute',
  transition: 'all 150ms ease-in-out',
  width: 'max-content',
  opacity: 0,
  visibility: 'hidden',
  variants: {
    align: {
      left: {
        ...getTriangle({ left: 40 }),
        left: 0,
        transformOrigin: '60px bottom',
        transform: 'translate(-20px, $2) scale(0.9)'
      },
      center: {
        ...getTriangle({ left: '50%' }),
        transformOrigin: 'center bottom',
        transform: 'translate(-50%, $2) scale(0.9)'
      },
      right: {
        ...getTriangle({ right: 31 }),
        right: 0,
        transformOrigin: 'calc(100% - 51px) bottom',
        transform: 'translate(0, $2) scale(0.9)'
      }
    },
    visibility: {
      true: {
        opacity: 1,
        visibility: 'visible'
      }
    }
  }
})

type PopoverProps = Override<
  React.ComponentPropsWithRef<
    typeof StyledPopoverContent & typeof StyledPopover
  >,
  {
    id?: string
    content: string
    align: 'right' | 'center' | 'left'
    defaultOpen?: boolean
    children: React.ReactNode
  }
>

export const Popover: React.FC<PopoverProps> = ({
  id,
  children,
  content,
  align = 'center',
  defaultOpen = false,
  ...remainingProps
}) => {
  const triggerContainerRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(defaultOpen)

  // need unique ids to enable using multiple popovers in the same page. Here we apply this technique as this is being soon replaced with the Radix-ui popover.
  const popoverId = `popover-trigger-${
    id || Math.random().toString(36).substr(2, 9)
  }`

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.keyCode !== undefined && (e.keyCode === 32 || e.keyCode === 13)) {
      // Handle the event with KeyboardEvent.keyCode for browsers still using e.keyCode
      setIsVisible(!isVisible)
    }
  }

  // We need a component that can accept a ref for the popover to target
  // TODO: replace with a Box once we make that accept a ref
  const PopoverTriggerWrapper = React.forwardRef<
    HTMLSpanElement,
    {
      children: React.ReactNode
    }
  >((props, ref) => (
    /*
     * The wrapper is a span to allow passing any type of trigger element. It can't be button because if the clien
     * passes a button in then we get an invalid HTML error as <button><button/></button> isn't semantically correct
     */
    <span
      id={popoverId}
      aria-expanded={isVisible}
      role="button"
      tabIndex={0}
      aria-label="popover trigger"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      ref={ref}
      {...props}
    />
  ))

  return (
    <StyledPopover {...remainingProps}>
      <PopoverTriggerWrapper ref={triggerContainerRef}>
        {children}
      </PopoverTriggerWrapper>
      <StyledPopoverContent
        role="tooltip"
        align={align}
        aria-labelledby={popoverId}
        aria-hidden={!isVisible}
        visibility={isVisible}
      >
        {content}
      </StyledPopoverContent>
    </StyledPopover>
  )
}

Popover.displayName = 'Popover'
