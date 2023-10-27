import { focusVisibleStyleBlock } from '~/utilities'
import { resetButtonStyles, resetLinkStyles } from '~/utilities/style/reset'

export const navigationMenuVerticalItemStyles = {
  ...resetButtonStyles,
  ...resetLinkStyles,
  cursor: 'pointer',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  p: '$2',
  pl: `var(--navigation-menu-vertical-item-pl)`,
  width: '100%',
  color: '$text',
  bg: '$background',
  '--navigation-menu-vertical-item-font-weight': 400,
  '&[data-active]': {
    bg: '$backgroundSelected',
    color: '$textSelected',
    '--navigation-menu-vertical-item-font-weight': 600
  },
  '&[data-state=open]': {
    '--navigation-menu-vertical-item-font-weight': 600
  },
  '&[data-disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&:not([data-disabled])': {
    '&:hover': {
      bg: '$backgroundHover'
    },
    '&:active': {
      bg: '$backgroundActive'
    },
    '&:focus-visible': focusVisibleStyleBlock()
  },
  variants: {
    size: {
      md: {
        minHeight: '$4'
      },
      lg: {
        minHeight: '$5'
      }
    }
  }
}
