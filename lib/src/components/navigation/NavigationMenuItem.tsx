import React from 'react'
import { ChevronDown } from '@atom-learning/icons'
import { styled } from '~/stitches'
import { Icon } from '../icon'
import * as PrimitiveNavigationMenu from '@radix-ui/react-navigation-menu'
import { CSS, theme } from '~/stitches'

const activeParentItemStyles = {
  fontWeight: 'bold',
  color: '$tonal500',
  '&::after': {
    backgroundColor: '$tonal500',
    borderRadius: '$1',
    bottom: 0,
    content: '',
    display: 'block',
    height: '2px',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%,0)',
    width: '$2'
  }
}

const disabledStyles = {
  background: 'none',
  color: '$tonal400',
  opacity: '30%',
  cursor: 'default'
}

const itemStyles = {
  all: 'unset',
  position: 'relative',
  color: '$tonal400',
  outline: 'none',
  cursor: 'pointer',
  fontFamily: '$body',
  userSelect: 'none',
  padding: '$3',
  borderRadius: '$1',
  '&:hover': { background: '$tonal50', color: '$tonal600' },
  '&:active': { background: '$tonal100', color: '$tonal600' },
  '&:focus-visible': {
    boxShadow: `0 0 0 2px ${theme.colors.primary}`
  },
  '&:disabled': {
    ...disabledStyles
  }
}

const StyledTrigger = styled(PrimitiveNavigationMenu.Trigger, itemStyles, {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$1',
  justifyContent: 'space-between',
  gap: '$1',
  '&[data-state="open"]': {
    background: '$tonal100'
  },
  variants: { active: { true: { ...activeParentItemStyles } } }
})

const StyledLink = styled(PrimitiveNavigationMenu.Link, itemStyles, {
  display: 'block',
  textDecoration: 'none',
  lineHeight: 1,
  variants: {
    elementType: {
      dropdownItem: {
        '&[data-active]': {
          background: '$primaryLight',
          color: '$primary'
        }
      },
      link: {
        '&[data-active]': { ...activeParentItemStyles }
      }
    }
  }
})

export const NavigationMenuDropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<{ active?: boolean }>
>(({ children, active, ...props }, forwardedRef) => {
  return (
    <StyledTrigger active={active} {...props} ref={forwardedRef}>
      {children}
      <Icon
        is={ChevronDown}
        css={{
          '[data-state=open] &': { transform: 'rotate(-180deg)' },
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'transform .2s ease'
          }
        }}
        size="sm"
      />
    </StyledTrigger>
  )
})

export const NavigationMenuDropdownContent = styled('ul', {})
const ListItem = styled('li', {})
const DisabledButton = styled('button', { ...itemStyles, ...disabledStyles })

type NavigationMenuLinkProps = {
  href: string
  active?: boolean
  disabled?: boolean
  variant?: 'link' | 'dropdownItem'
  css?: CSS
}

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<NavigationMenuLinkProps>
>(
  (
    { children, href, disabled, css, variant = 'link', ...props },
    forwardedRef
  ) => {
    if (disabled) {
      return (
        <DisabledButton disabled {...props}>
          {children}
        </DisabledButton>
      )
    }

    return (
      <ListItem>
        <StyledLink
          href={href}
          ref={forwardedRef}
          elementType={variant}
          css={css}
          {...props}
        >
          {children}
        </StyledLink>
      </ListItem>
    )
  }
)

export const NavigationMenuDropdownItem = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<NavigationMenuLinkProps>
>((props, forwardedRef) => {
  return (
    <NavigationMenuLink ref={forwardedRef} variant="dropdownItem" {...props} />
  )
})
