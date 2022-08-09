import { styled } from '~/stitches'

import { Flex } from '../flex'

export const StepperStepContainer = styled(Flex, {
  position: 'relative',
  fontFamily: '$body',
  fontWeight: 600,
  fontSize: '$md',
  alignItems: 'center',
  '&:not(:last-child)::after': {
    content: '',
    position: 'absolute'
  },
  '&:focus': {
    outline: 'none'
  },
  variants: {
    direction: {
      vertical: {
        py: '$3',
        flexDirection: 'row',
        '&:not(:last-child)::after': {
          height: '100%',
          width: '4px',
          left: '14px',
          top: '50%'
        }
      },
      horizontal: {
        px: '$2',
        flexDirection: 'column',
        '&:not(:last-child)::after': {
          width: '100%',
          height: '4px',
          left: '50%',
          top: '14px'
        }
      }
    },
    separator: {
      default: { '&:not(:last-child)::after': { bg: '$tonal50' } },
      active: { '&:not(:last-child)::after': { bg: '$primary' } },
      success: { '&:not(:last-child)::after': { bg: '$success' } }
    },
    status: {
      completed: {
        '&:hover': {
          '& :first-child': { bg: '$primaryMid', color: 'white !important' },
          '& :last-child': { color: '$primaryMid' }
        },
        '&:focus': {
          '& :first-child': {
            outline: '2px solid $primary',
            outlineOffset: '2px'
          }
        }
      },
      active: {
        '&:hover': {
          '& :first-child': { borderColor: '$tonal400', color: '$tonal600' },
          '& :last-child': { color: '$tonal600' }
        },
        '&:focus': {
          '& :first-child': {
            outline: '2px solid $primary',
            outlineOffset: '2px'
          }
        }
      },
      default: {},
      viewed: {
        '&:focus': {
          '& :first-child': {
            outline: '2px solid $primary !important',
            outlineOffset: '2px !important'
          }
        }
      },
      success: {},
      reviewed: {
        '&:focus': {
          '& :first-child': {
            outline: '2px solid $primary !important',
            outlineOffset: '2px !important'
          }
        }
      }
    }
  }
})
