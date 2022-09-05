import React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { keyframes, styled, theme } from '~/stitches'
import { Flex } from '../flex'
import { RemoveScroll } from 'react-remove-scroll'
import { Box } from '../box'
import { MAX_Z_INDEX } from '~/constants/zIndices'
import { Hamburger } from './Hamburger'

const open = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: 'var(--radix-collapsible-content-height)', opacity: 1 }
})

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)', opacity: 1 },
  to: { height: 0, opacity: 0 }
})

const StyledContent = styled(CollapsiblePrimitive.Content, {
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
  background: 'white',
  top: theme.sizes[6],
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: MAX_Z_INDEX,
  position: 'fixed',
  '&[data-state="open"]': { animation: `${open} 0.15s linear` },
  '&[data-state="closed"]': { animation: `${close} 0.15s linear` }
})

const StyledRoot = styled(CollapsiblePrimitive.Root, {})

const StyledTrigger = styled(CollapsiblePrimitive.Trigger, {
  mr: '$2',
  ml: '-$2',
  p: 0,
  color: '$tonal400',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'none',
  border: 'none',
  cursor: 'pointer',
  size: '$4'
})

interface CollapsibleContextValue {
  isOpen: boolean
  onOpenToggle: () => void
}

const CollaspibleContext = React.createContext<
  CollapsibleContextValue | undefined
>(undefined)

export const useCollapsibleContext = () => {
  const context = React.useContext(CollaspibleContext)

  if (context === undefined) {
    throw new Error(
      'useMobileMenuContext must be used within a MobileMenuContextProvider'
    )
  }

  return context
}

export const Collapsible: React.FC<React.ComponentProps<typeof StyledRoot>> = ({
  children,
  css,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const onOpenToggle = () => setIsOpen(!isOpen)

  const value = {
    isOpen,
    onOpenToggle
  }

  return (
    <CollaspibleContext.Provider value={value}>
      <StyledRoot
        open={isOpen}
        onOpenChange={onOpenToggle}
        css={css}
        {...props}
      >
        {children}
      </StyledRoot>
    </CollaspibleContext.Provider>
  )
}

export const CollapsibleTrigger: React.FC<
  React.ComponentProps<typeof StyledTrigger>
> = ({ children, css, ...props }) => {
  const { isOpen } = useCollapsibleContext()

  return (
    <StyledTrigger css={css} aria-label="toggle mobile menu" {...props}>
      <Hamburger isOpen={isOpen} />
      {children}
    </StyledTrigger>
  )
}

export const CollapsibleContent: React.FC<
  React.ComponentProps<typeof StyledContent>
> = ({ children, css }) => {
  const { isOpen, onOpenToggle } = useCollapsibleContext()

  return (
    <RemoveScroll enabled={isOpen} forwardProps>
      <StyledContent>
        <Flex css={{ flexDirection: 'column', px: '$4', py: '$5', ...css }}>
          {children}
        </Flex>
        <Box
          onClick={onOpenToggle}
          css={{
            width: '100%',
            height: '100%'
          }}
        />
      </StyledContent>
    </RemoveScroll>
  )
}
