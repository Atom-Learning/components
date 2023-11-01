export const navigationMenuDisabledItemStyles = {
  background: 'none',
  color: '$text',
  opacity: '30%',
  cursor: 'default'
}

export const navigationMenuBaseItemStyles = {
  all: 'unset',
  position: 'relative',
  color: '$text',
  outline: 'none',
  cursor: 'pointer',
  fontFamily: '$body',
  userSelect: 'none',
  padding: '$3',
  borderRadius: '$1',
  background: '$background',
  '&:hover': { background: '$backgroundHover', color: '$textHover' },
  '&:active': {
    background: '$backgroundActive',
    color: '$textActive'
  },
  '&:focus-visible': {
    boxShadow: 'inset 0 0 0 2px $colors$primary'
  },
  '&:disabled': {
    ...navigationMenuDisabledItemStyles
  }
}

export const navigationMenuActiveItemStyles = {
  fontWeight: '600',
  color: '$itemTextSelected',
  '&::after': {
    backgroundColor: '$itemBackgroundSelected',
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
