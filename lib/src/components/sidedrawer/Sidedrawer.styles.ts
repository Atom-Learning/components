export const sidedrawerItemStyles = {
  alignItems: 'center',
  bg: 'white',
  border: 'unset',
  display: 'flex',
  color: '$tonal600',
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
  '&:hover': { background: '$tonal50' },
  '&:active': { background: '$tonal100' },
  '&:focus-visible': {
    boxShadow: 'inset 0 0 0 2px $colors$primary'
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
