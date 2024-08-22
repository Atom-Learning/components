import {
  Badge,
  ActionIcon,
  Icon,
  SideBar,
  ToggleGroup,
  Text,
  Flex,
  Drawer
} from '@atom-learning/components'
import logo from '@atom-learning/theme/lib/assets/logos/atom/atom-learning-logotype-primary.svg'
import * as React from 'react'

import buildConstants from '~/lib/build/constants.json'
import { Navigation } from '~/components/app'

import { Hamburger } from '@atom-learning/icons'
import { useTheme } from '~/utilities/hooks/useTheme'

const NavigationHeader = () => (
  <SideBar.Brand href="/">
    <SideBar.BrandLogo src={logo.src} css={{ width: 140 }} />
    <Badge
      theme="neutral"
      size="xs"
      css={{ position: 'absolute', right: '$3', top: '$4' }}
    >
      {buildConstants['version']}
    </Badge>
  </SideBar.Brand>
)

const BrandSwitch = () => {
  const { theme, updateTheme } = useTheme()
  return (
    <Flex gap="3" align="center" justify="center">
      <Text size="sm" css={{ fontWeight: '600' }}>
        Brand
      </Text>
      <ToggleGroup.Root
        type="single"
        orientation="horizontal"
        value={theme}
        defaultValue="atom"
        onValueChange={(value: 'atom' | 'quest') => value && updateTheme(value)}
      >
        <ToggleGroup.Button value="atom" size="sm">
          Atom
        </ToggleGroup.Button>
        <ToggleGroup.Button value="quest" size="sm">
          Quest
        </ToggleGroup.Button>
      </ToggleGroup.Root>
    </Flex>
  )
}

export const NavigationMobile = () => (
  <Drawer position="left">
    <Drawer.Trigger asChild>
      <ActionIcon
        size="lg"
        css={{
          position: 'fixed',
          top: '$2',
          left: '$2',
          zIndex: 1,
          '@lg': { display: 'none' }
        }}
        label="View Navigation"
      >
        <Icon is={Hamburger} />
      </ActionIcon>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Header>
        <NavigationHeader />
      </Drawer.Header>
      <Drawer.Main>
        <Navigation />
      </Drawer.Main>
      <Drawer.Footer>
        <BrandSwitch />
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer>
)

export const NavigationDesktop = () => (
  <SideBar type="static">
    <SideBar.Header>
      <NavigationHeader />
    </SideBar.Header>
    <SideBar.Body>
      <Navigation />
    </SideBar.Body>
    <SideBar.Footer>
      <BrandSwitch />
    </SideBar.Footer>
  </SideBar>
)
