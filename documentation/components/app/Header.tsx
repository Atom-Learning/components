import { Badge, Image, styled, ActionIcon, Icon } from '@atom-learning/components'
import logo from '@atom-learning/theme/lib/assets/logo-light.svg'
import { default as NextLink } from 'next/link'
import * as React from 'react'

import buildConstants from '~/lib/build/constants.json'
import { Navigation } from '~/components/app'

import { ColorScheme } from '@atom-learning/color-scheme'
import { Hamburger } from '@atom-learning/icons'


type HeaderTriggerProps = {
  onClick: () => void
}

export const HeaderTrigger: React.FC<HeaderTriggerProps> = (props) => (
  <ActionIcon
    appearance="solid"
    size="lg"
    css={{
      background: '$interactive1',
      color: '$interactiveForeground',
      position: 'fixed',
      top: '$2',
      left: '$2',
      zIndex: 1,
      '@lg': {
        display: 'none'
      }
    }}
    label="View Navigation" {...props}><Icon is={Hamburger} /></ActionIcon>
)

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

const StyledHeader = styled('header', {
  background: '$interactive1',
  color: '$interactiveForeground',
  boxShadow: '$1',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'fixed',
  left: 0,
  top: 0,
  px: '$3',
  py: '$4',
  transform: 'translateX(-100%)',
  transition: 'transform 175ms ease-out',
  width: 260,
  maxWidth: '100%',
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

const version = buildConstants['version']
export const Header: React.FC = (props) => {
  const ref = React.useRef()
  const [menuOpen, setMenuOpen] = React.useState(false)

  useOnClickOutside(ref, () => setMenuOpen(false))

  return (
    <ColorScheme interactiveAccent="hiContrast">
      <HeaderTrigger onClick={() => setMenuOpen(true)} />
      <StyledHeader ref={ref} open={menuOpen} {...props}>
        <NextLink href="/">
          <Image src={logo.src} width={80} alt="" css={{ mb: '$7' }} />
        </NextLink>
        <Badge
          theme="success"
          size="xs"
          css={{ position: 'absolute', right: '$3', top: '$4' }}
        >
          {version}
        </Badge>
        <Navigation />
      </StyledHeader>
    </ColorScheme>
  )
}
