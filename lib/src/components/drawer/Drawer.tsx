import { Root } from '@radix-ui/react-dialog'
import React from 'react'

import { DrawerClose } from './DrawerClose'
import { DrawerContent } from './DrawerContent'
import { DrawerTrigger } from './DrawerTrigger'
import { DrawerMain } from './DrawerMain'
import { DrawerHeader } from './DrawerHeader'
import { DrawerFooter } from './DrawerFooter'
import { DrawerProvider } from './Drawer.context'

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
