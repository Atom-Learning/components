export const sidedrawerItemStyles = {
  alignItems: 'center',
  bg: 'white',
  border: 'unset',
  color: '$tonal600',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$body',
  fontWeight: '400',
  fontSize: '$md',
  margin: 0,
  minHeight: '48px',
  outline: 'unset',
  outlineOffset: 'unset',
  py: '$3',
  px: '$4',
  width: '100%',
  textDecoration: 'none',
  '&:hover': { bg: '$tonal50' },
  '&:active': { bg: '$tonal100' },
  '&:focus-visible': {
    boxShadow: 'inset 0 0 0 2px $colors$primary'
  },
  '&[disabled]': {
    opacity: '0.3',
    pointerEvents: 'none',
    cursor: 'default'
  },
  variants: {
    active: {
      true: {
        bg: '$primaryLight',
        borderLeft: '4px solid $primary',
        color: '$primary',
        fontWeight: '600'
      }
    }
  }
}
