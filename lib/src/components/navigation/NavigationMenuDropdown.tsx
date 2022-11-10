import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { CSS, styled } from '~/stitches'

import { useNavigationMenuContext } from './NavigationMenuContext'
import { NavigationMenuDropdownTrigger } from './NavigationMenuItem'

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  p: '$3',
  bg: 'white',
  mt: '4px',
  boxShadow:
    '0px 3px 6px rgba(51, 51, 51, 0.15), 0px 3px 6px rgba(51, 51, 51, 0.2)',
  borderRadius: '$1'
})

type NavigationMenuDropdownProps = {
  active?: boolean
  css?: CSS
  title: string
  triggerComponent?: React.ReactNode
} & React.HTMLProps<HTMLButtonElement>

export const NavigationMenuDropdown: React.FC<NavigationMenuDropdownProps> = ({
  children,
  title,
  triggerComponent,
  ...props
}) => {
  const { onNodeUpdate } = useNavigationMenuContext()

  return (
    <NavigationMenuPrimitive.Item value={title}>
      <NavigationMenuDropdownTrigger
        {...props}
        ref={(node: HTMLButtonElement) => onNodeUpdate(node, title)}
      >
        {triggerComponent || title}
      </NavigationMenuDropdownTrigger>
      <StyledContent>{children}</StyledContent>
    </NavigationMenuPrimitive.Item>
  )
}
