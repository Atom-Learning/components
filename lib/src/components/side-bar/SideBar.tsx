import React from 'react'
import { styled } from '~/stitches'
import { light } from './stitches.SideBar'

import { SideBarHeader } from './SideBarHeader'
import { SideBarMain } from './SideBarMain'
import { SideBarFooter } from './SideBarFooter'

const StyledSideBar = styled('div', {
  bg: '$background',
  borderRight: '1px solid $border',
  boxShadow: '4px 0 4px -2px rgba(31, 31, 31, 0)', // ugggghh .... do we need? Miguel?
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden'
})

type SideBarProps = React.ComponentProps<typeof StyledSideBar>
export const SideBar = ({
  className = light,
  children,
  ...rest
}: SideBarProps) => {
  return <StyledSideBar className={className} {...rest}>{children}</StyledSideBar>
}

SideBar.Header = SideBarHeader
SideBar.Main = SideBarMain
SideBar.Footer = SideBarFooter

SideBar.displayName = 'SideBar'
