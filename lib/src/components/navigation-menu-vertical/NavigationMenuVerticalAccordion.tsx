import { Root } from '@radix-ui/react-collapsible'
import * as React from 'react'

import { useCallbackRef } from '~/utilities/hooks/useCallbackRef'

import { NavigationMenuVerticalItem } from './NavigationMenuVerticalItem'

type TNavigationMenuVerticalAccordionContextValue = {
  triggerRef?: React.MutableRefObject<HTMLElement | null>
  setTriggerRef?: (HTMLElement) => void
}
export const NavigationMenuVerticalAccordionContext =
  React.createContext<TNavigationMenuVerticalAccordionContextValue>({})
const NavigationMenuVerticalAccordionProvider = ({ children }) => {
  const [triggerRef, setTriggerRef] = useCallbackRef()
  return (
    <NavigationMenuVerticalAccordionContext.Provider
      value={{ triggerRef, setTriggerRef }}
    >
      {children}
    </NavigationMenuVerticalAccordionContext.Provider>
  )
}

type TNavigationMenuVerticalAccordionProps = React.ComponentProps<typeof Root> &
  React.ComponentProps<typeof NavigationMenuVerticalItem>
export const NavigationMenuVerticalAccordion = ({
  defaultOpen,
  open,
  onOpenChange,
  disabled,
  ...rest
}: TNavigationMenuVerticalAccordionProps): JSX.Element => {
  const collapsibleProps = { defaultOpen, open, onOpenChange, disabled }
  return (
    <NavigationMenuVerticalAccordionProvider>
      <Root {...collapsibleProps} asChild>
        <NavigationMenuVerticalItem {...rest} />
      </Root>
    </NavigationMenuVerticalAccordionProvider>
  )
}
