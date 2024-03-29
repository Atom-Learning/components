import { Content, Portal } from '@radix-ui/react-dialog'
import React from 'react'

import { Flex } from '~/components/flex'
import { DIALOG_Z_INDEX } from '~/constants/zIndices'
import { ColorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'
import { slideInOut } from '~/utilities'

import { DrawerContext } from './Drawer.context'
import { DrawerOverlay } from './DrawerOverlay'

const animationTop = slideInOut({ outPosition: { x: 0, y: '-100%' } })
const animationRight = slideInOut({ outPosition: { x: '100%', y: 0 } })
const animationBottom = slideInOut({ outPosition: { x: 0, y: '100%' } })
const animationLeft = slideInOut({ outPosition: { x: '-100%', y: 0 } })
const setupAnimation = (animation: ReturnType<typeof slideInOut>) => {
  return {
    '&[data-state="open"]': {
      animationName: animation.in
    },
    '&[data-state="closed"]': {
      animationName: animation.out
    }
  }
}

const positionY = {
  left: 0,
  width: '100%',
  maxHeight: '85%'
}

const positionX = {
  top: 0,
  height: '100%',
  width: 'var(--drawer-content-width, 100%)',
  maxWidth: '100%'
}

export const StyledContent = styled(Content, {
  bg: '$base1',
  boxShadow: '$2',
  position: 'fixed',
  zIndex: DIALOG_Z_INDEX,
  '@allowMotion': {
    animationTimingFunction: 'ease-out',
    animationDuration: '250ms'
  },
  variants: {
    position: {
      top: {
        top: 0,
        ...positionY,
        ...setupAnimation(animationTop)
      },
      right: {
        right: 0,
        ...positionX,
        ...setupAnimation(animationRight)
      },
      bottom: {
        bottom: 0,
        ...positionY,
        ...setupAnimation(animationBottom)
      },
      left: {
        left: 0,
        ...positionX,
        ...setupAnimation(animationLeft)
      }
    },
    size: {
      xs: {
        '--drawer-content-width': '240px'
      },
      sm: {
        '--drawer-content-width': '256px'
      },
      md: {
        '--drawer-content-width': '288px'
      },
      lg: {
        '--drawer-content-width': '304px'
      },
      xl: {
        '--drawer-content-width': '320px'
      }
    }
  }
})

export const DrawerContent = ({
  children,
  ...rest
}: React.ComponentProps<typeof StyledContent>) => {
  const { position } = React.useContext(DrawerContext)

  return (
    <Portal>
      <DrawerOverlay />
      <ColorScheme base="grey1" accent="primary1" asChild>
        <StyledContent size="lg" position={position} {...rest} asChild>
          <Flex direction="column">{children}</Flex>
        </StyledContent>
      </ColorScheme>
    </Portal>
  )
}
