import { Box, Heading, Image, styled, Text } from '@components'
import pkg from '@pkgJson'
import logo from '@atom-learning/theme/lib/assets/logo-light.svg'
import { capitalCase } from 'capital-case'
import { default as NextLink } from 'next/link'
import * as React from 'react'

import { Pill } from '../'
import { NavigationContent } from './NavigationContent'
import { NavigationTrigger } from './NavigationTrigger'

export type PageData = {
  id: string
  title: string
  source: 'overview' | 'theme' | 'components'
}

export type NavigationItem =
  | PageData[]
  | {
      [key: string]: PageData[]
    }

type NavigationProps = {
  items: {
    [key: string]: NavigationItem
  }
}

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

const StyledNavigation = styled('nav', {
  backgroundColor: '$primary',
  boxShadow: '$1',
  height: '100vh',
  left: 0,
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'fixed',
  px: '$3',
  py: '$4',
  top: 0,
  transform: 'translateX(-280px)',
  transition: 'transform 175ms ease-out',
  width: 260,
  zIndex: 1,
  '@lg': {
    boxShadow: 'none',
    position: 'sticky',
    transform: 'none',
    transition: '0ms'
  },
  variants: {
    open: {
      true: {
        transform: 'translateX(0)'
      }
    }
  }
})

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const ref = React.useRef()
  const [menuOpen, setMenuOpen] = React.useState(false)

  useOnClickOutside(ref, () => setMenuOpen(false))

  return (
    <>
      <NavigationTrigger onClick={() => setMenuOpen(true)} />
      <StyledNavigation ref={ref} open={menuOpen}>
        <NextLink href="/">
          <Image src={logo} css={{ cursor: 'pointer', mb: '$7', width: 80 }} />
        </NextLink>
        <Pill
          css={{ position: 'absolute', right: '$3', top: '$3' }}
        >{`v${pkg.version}`}</Pill>
        {Object.entries(items).map(([source, content]) => (
          <Box css={{ mb: '$6' }} key={source}>
            <Heading as="h2" size="sm" css={{ color: 'white', mb: '$4' }}>
              {capitalCase(source)}
            </Heading>
            <NavigationContent
              content={content}
              onNavigate={() => setMenuOpen(false)}
            />
          </Box>
        ))}
      </StyledNavigation>
    </>
  )
}
