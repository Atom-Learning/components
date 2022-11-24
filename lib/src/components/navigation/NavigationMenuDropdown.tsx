import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React, { ComponentProps, ReactElement } from 'react'

import { CSS } from '~/stitches'

import { useNavigationMenuContext } from './NavigationMenuContext'
import { NavigationMenuDropdownContent } from './NavigationMenuDropdownContent'
import { NavigationMenuDropdownTrigger } from './NavigationMenuDropdownTrigger'

type NavigationMenuDropdownProps = {
  active?: boolean
  css?: CSS
  id: string
} & React.HTMLProps<HTMLButtonElement>

type DropdownTriggerProps = ComponentProps<typeof NavigationMenuDropdownTrigger>

export const NavigationMenuDropdown: React.FC<NavigationMenuDropdownProps> = ({
  children,
  id,
  ...props
}) => {
  const { onNodeUpdate } = useNavigationMenuContext()

  return (
    <NavigationMenuPrimitive.Item value={id}>
      {React.Children.map(children, (child) => {
        const isTrigger =
          React.isValidElement(child) &&
          child.type === NavigationMenuDropdownTrigger
        const isContent =
          React.isValidElement(child) &&
          child.type === NavigationMenuDropdownContent

        if (!isTrigger && !isContent) {
          throw new Error(
            'Only NavigationMenu.Trigger and NavigationMenu.Content can be the passed as a "children" of NavigationMenu.Dropdown'
          )
        }
        return isTrigger
          ? React.cloneElement(
              child as ReactElement<DropdownTriggerProps>,
              {
                ...props,
                ref: (node: HTMLButtonElement) => onNodeUpdate(node, id)
              } as React.PropsWithRef<DropdownTriggerProps>
            )
          : child
      })}
    </NavigationMenuPrimitive.Item>
  )
}

NavigationMenuDropdown.displayName = 'NavigationMenuDropdown'
