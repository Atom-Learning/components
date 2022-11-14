import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { CSS } from '~/stitches'

import { useNavigationMenuContext } from './NavigationMenuContext'
import {
  NavigationMenuDropdownContent,
  NavigationMenuDropdownTrigger
} from './NavigationMenuItem'

type NavigationMenuDropdownProps = {
  active?: boolean
  css?: CSS
  title: string
} & React.HTMLProps<HTMLButtonElement>

const DefaultDropdown: React.FC<
  NavigationMenuDropdownProps & {
    onNodeUpdate: (
      trigger: HTMLButtonElement,
      itemValue: string
    ) => HTMLButtonElement
  }
> = ({ children, title, onNodeUpdate, ...props }) => (
  <>
    <NavigationMenuDropdownTrigger
      {...props}
      ref={(node: HTMLButtonElement) => onNodeUpdate(node, title)}
    >
      {title}
    </NavigationMenuDropdownTrigger>
    {children}
  </>
)

export const NavigationMenuDropdown: React.FC<NavigationMenuDropdownProps> = ({
  children,
  title,
  ...props
}) => {
  const { onNodeUpdate } = useNavigationMenuContext()

  const hasCustomTrigger = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      child.type === NavigationMenuDropdownTrigger
  )

  return (
    <NavigationMenuPrimitive.Item value={title}>
      {!hasCustomTrigger ? (
        <DefaultDropdown title={title} onNodeUpdate={onNodeUpdate} {...props}>
          {children}
        </DefaultDropdown>
      ) : (
        React.Children.map(children, (child) => {
          const isTrigger =
            React.isValidElement(child) &&
            child.type === NavigationMenuDropdownTrigger
          const isContent =
            React.isValidElement(child) &&
            child.type === NavigationMenuDropdownContent

          if (!isTrigger && !isContent) {
            throw new Error(
              'NavigationMenu.Dropdown children can be only NavigationMenu.Trigger and NavigationMenu.Content'
            )
          }

          return isTrigger
            ? React.cloneElement(child, {
                ...props,
                ref: (node: HTMLButtonElement) => onNodeUpdate(node, title)
              })
            : React.cloneElement(child)
        })
      )}
    </NavigationMenuPrimitive.Item>
  )
}
