import {
  Bug,
  ChevronDown,
  Exit,
  Hamburger,
  Help,
  Person,
  Settings,
  Shuffle,
  Close
} from '@atom-learning/icons'
import React from 'react'

import { styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Box } from '../box'
import { DropdownMenu } from '../dropdown-menu'
import { itemStyles } from '../dropdown-menu/DropdownMenuItem'
import { Flex } from '../flex'
import { Icon } from '../icon'
import { Image } from '../image/index'
import { Link } from '../link'
import { List } from '../list'
import { Text } from '../text'
import glass from './glass.svg'
import hat from './hat.svg'
import navigationLogo from './logo.svg'
import pencil from './Pencil.svg'

const RotatingIcon = styled(Icon, {
  transition: 'transform 300ms',
  '[data-state="open"] > &': {
    transform: 'rotate(180deg)'
  },
  '[data-state="closed"] > &': {
    transform: 'rotate(0deg)'
  }
})

const navigationList = [
  {
    alt: 'Learn',
    label: 'Learn',
    src: pencil,
    href: '/'
  },
  {
    alt: 'Review',
    label: 'Review',
    src: glass,
    href: '/'
  },
  {
    alt: 'Test',
    label: 'Test',
    src: hat,
    href: '/',
    isActive: true
  }
]
const navigationDropDownList = [
  {
    label: 'My Settings',
    icon: Settings,
    href: '/',
    hasSeparator: true
  },
  {
    label: 'Help using Atom',
    href: '/',
    icon: Help
  },
  {
    label: 'Something wrong? Tell us',
    href: '/',
    icon: Bug,
    hasSeparator: true
  },
  {
    label: 'Switch to parent',
    href: '/',
    icon: Shuffle
  },
  {
    label: 'Log out',
    href: '/',
    icon: Exit
  }
]

const StyledNav = styled('nav', {
  width: '100%',
  background: 'white',
  overflow: 'hidden'
})


const Dropdown = styled(Box,{
  px: '$4',
  background: 'white',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 'cal(100vh - $6)',
  transition: ' transform 250ms ease-in-out',
  overflow: 'hidden',
  height: '100vh',
  '@md': {
    display: 'none'
  },
  variants: {
    isOpen: {
      true: {
       transform: 'translateX(0%)',
      },
      false: {
        transform: 'translateX(100%)',
      }
    }
  }
})


const SliderNavigationItem = ({label, icon, src}) => {
  return (
    <List.Item css={{
      display: 'flex',
      mt: '$3',
      height: '$4'
    }}>
      <Link css={{
        display: 'flex',
        alignItems: 'center',
        color: 'unset'
      }}>
        <Box css={{width: '$2'}}>
         { src &&  <Image src={src} size='sm' /> }
          { icon && <Icon is={icon} size='md'  /> }
        </Box>
        <Text css={{ ml: '$3', alignItems: 'center' }}>{label} </Text>
      </Link>
    </List.Item>
  )
}

const NavigationItem = ({ src, label, isActive, css }) => {
  return (
    <List.Item
      css={{
        borderRadius: '$2',
        mr: '$4',
        display: 'flex',
        ...(isActive && { background: '$tonal100' }),
      }}
    >
      <Link
        href="/"
        css={{
          padding: '$3 $4',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            textDecoration: 'none'
          },
          ...css
        }}
      >
        <Box
          css={{
            width: '$3',
            margin: '0 auto'
          }}
        >
          <Image src={src} />
        </Box>
        {label && <Text css={{ mt: '$2' }}>{label} </Text>}
      </Link>
    </List.Item>
  )
}


interface navItem {
  label: string
  alt: string
  src: string
  href: string
  isActive?: boolean
}


type IconType = typeof Icon
interface navDropDownItem {
  label: string
  icon: IconType
  href: string
  hasSeparator?: boolean
}

interface INavigationProps {
  navigationLogo: string
  navigationList: navItem[]
  navigationDropDownList: navDropDownItem[]
}

export const Navigation = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <StyledNav>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '1296px',
          justifyContent: 'space-between',
          margin: '0 auto',
          alignItems: 'center',
          height: '$6',
          px: '$4',
          '@md': {
            gridTemplateColumns: '1fr 1fr 1fr',
            height: '$7'
          }
        }}
      >
        <Box
          css={{
            width: '$6',
            '@md': {
              width: '$8'
            }
          }}
        >
          <Image src={navigationLogo} />
        </Box>

        <List
          css={{
            display: 'none',
            '@md': {
              display: 'flex',
              '& > li': {
                pl: '0 !important',
                mb: '0 !important'
              }
            }
          }}
        >
          {navigationList?.map((items) => (
            <NavigationItem
              key={items.alt}
              src={items.src}
              label={items.alt}
              isActive={items?.isActive}
            />
          )) || []}
        </List>
        <DropdownMenu
          css={{
            boxShadow: '$2'
          }}
        >
          <DropdownMenu.Trigger
            asChild
            css={{
              display: 'none',
              '@md': {
                display: 'flex'
              }
            }}
          >
            {/* <NavigationDropDownTrigger/> */}
            <Flex
              css={{
                alignItems: 'center',
                justifyContent: 'end'
              }}
            >
              <ActionIcon
                css={{
                  background: '$tonal100',
                  p: '$1'
                }}
                isRounded
                appearance="subtle"
              >
                <Icon is={Person} />
              </ActionIcon>
              <RotatingIcon is={ChevronDown} />
            </Flex>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content side="right">
            {navigationDropDownList?.map((item) => (
              <>
                <DropdownMenu.LinkItem href="">
                  <Icon is={item.icon} size='sm' css={{
                    mr: '$2'
                  }}/>{item.label}
                </DropdownMenu.LinkItem>
                {item?.hasSeparator && (
                  <DropdownMenu.Separator
                    css={{
                      backgroundColor: '$tonal100'
                    }}
                  />
                )}
              </>
            )) || []}
          </DropdownMenu.Content>
        </DropdownMenu>
        <Icon
          is={open? Close : Hamburger}
          css={{
            gridColumnEnd: 'none',
            color: '$primary',
            '@md': {
              display: 'none'
            }
          }}
          size="lg"
          onClick={() => {
            setOpen(!open)
          }}
        />
      </Box>

        <Dropdown
         isOpen={open}
        >
         {
           navigationList?.map((item) => <SliderNavigationItem src={item.src} label={item.label}/> || [])
         }
          <DropdownMenu.Separator
            css={{
              backgroundColor: '$tonal100'
            }}
          />
          {
            navigationDropDownList?.map((item) => <SliderNavigationItem label={item.label} icon={item.icon} /> || [])
          }
        </Dropdown>
    </StyledNav>
  )
}
