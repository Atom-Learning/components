import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React, { ComponentProps, PropsWithRef, ReactElement } from 'react'

import { CSS } from '~/stitches'

import { useNavigationMenuContext } from './NavigationMenuContext'
import { NavigationMenuDropdownContent } from './NavigationMenuDropdownContent'
import { NavigationMenuDropdownTrigger } from './NavigationMenuDropdownTrigger'

type NavigationMenuDropdownProps = {
  active?: boolean
  css?: CSS
  title: string
} & React.HTMLProps<HTMLButtonElement>

type DropdownTriggerProps = ComponentProps<typeof NavigationMenuDropdownTrigger>
type DropdownContentProps = ComponentProps<typeof NavigationMenuDropdownContent>

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
              'Only NavigationMenu.Trigger and NavigationMenu.Content can be the passed as a "children" of NavigationMenu.Dropdown'
            )
          }
          return isTrigger
            ? React.cloneElement(
                child as ReactElement<
                  React.PropsWithChildren<DropdownTriggerProps>
                >,
                {
                  ...props,
                  ref: (node: HTMLButtonElement) => onNodeUpdate(node, title)
                } as React.PropsWithRef<DropdownTriggerProps>
              )
            : React.cloneElement(
                child as ReactElement<
                  React.PropsWithChildren<DropdownContentProps>
                >
              )
        })
      )}
    </NavigationMenuPrimitive.Item>
  )
}

NavigationMenuDropdown.displayName = 'NavigationMenuDropdown'
