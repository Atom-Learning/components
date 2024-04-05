import { Root } from '@radix-ui/react-dialog'
import React from 'react'

import { DrawerProvider } from './Drawer.context'
import { DrawerClose } from './DrawerClose'
import { DrawerContent } from './DrawerContent'
import { DrawerFooter } from './DrawerFooter'
import { DrawerHeader } from './DrawerHeader'
import { DrawerMain } from './DrawerMain'
import { DrawerTrigger } from './DrawerTrigger'

type TDrawerProps = React.ComponentProps<typeof Root> &
  React.ComponentProps<typeof DrawerProvider>

export const Drawer = ({
  children,
  position,
  ...rest
}: TDrawerProps): JSX.Element => {
  return (
    <DrawerProvider position={position}>
      <Root {...rest}>{children}</Root>
    </DrawerProvider>
  )
}

Drawer.Close = DrawerClose
Drawer.Content = DrawerContent
Drawer.Main = DrawerMain
Drawer.Header = DrawerHeader
Drawer.Footer = DrawerFooter
Drawer.Trigger = DrawerTrigger
