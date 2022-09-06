import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'

import { NavigationMenuDropdownTrigger } from './NavigationMenuItem'
import { useNavigationMenuContext } from './NavigationMenuContext'

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  p: '$3',
  bg: 'white',
  mt: '4px',
  boxShadow:
    '0px 3px 6px rgba(51, 51, 51, 0.15), 0px 3px 6px rgba(51, 51, 51, 0.2)',
  borderRadius: '$1'
})

type NavigationMenuDropdownProps = {
  title: string
  active?: boolean
} & React.HTMLProps<HTMLButtonElement>

export const NavigationMenuDropdown: React.FC<NavigationMenuDropdownProps> = ({
  children,
  title,
  active,
  ...props
}) => {
  const { onNodeUpdate } = useNavigationMenuContext()

  return (
    <NavigationMenuPrimitive.Item value={title}>
      <NavigationMenuDropdownTrigger
        active={active}
        {...props}
        ref={(node: HTMLButtonElement) => onNodeUpdate(node, title)}
      >
        {title}
      </NavigationMenuDropdownTrigger>
      <StyledContent>{children}</StyledContent>
    </NavigationMenuPrimitive.Item>
  )
}
