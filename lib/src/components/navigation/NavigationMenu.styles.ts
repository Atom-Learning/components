export const navigationMenuDisabledItemStyles = {
  background: 'none',
  color: '$tonal400',
  opacity: '30%',
  cursor: 'default'
}

export const navigationMenuBaseItemStyles = {
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
    boxShadow: 'inset 0 0 0 2px $colors$primary'
  },
  '&:disabled': {
    ...navigationMenuDisabledItemStyles
  }
}

export const navigationMenuActiveItemStyles = {
  fontWeight: '600',
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
