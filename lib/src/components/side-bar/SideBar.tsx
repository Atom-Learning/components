import React from 'react'
import { styled } from '~/stitches'
import { light } from './stitches.SideBar'

import {
  SideBarBrand,
  SideBarBrandLogo,
  SideBarBrandName,
} from './SideBarComponents'
import { SideBarHeader } from './SideBarHeader'
import { SideBarMain } from './SideBarMain'
import { SideBarFooter } from './SideBarFooter'

const Root = styled('div', {
  bg: '$background',
  borderRight: '1px solid $border',
  boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0)', // ugggghh .... do we need? Miguel?
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden'
})

type SideBarProps = React.ComponentProps<typeof Root>
export const SideBar = ({
  className = light,
  children,
  ...rest
}: SideBarProps) => {
  return <Root className={className} {...rest}>{children}</Root>
}

SideBar.Brand = SideBarBrand
SideBar.BrandLogo = SideBarBrandLogo
SideBar.BrandName = SideBarBrandName
SideBar.Header = SideBarHeader
SideBar.Main = SideBarMain
SideBar.Footer = SideBarFooter

SideBar.displayName = 'SideBar'
