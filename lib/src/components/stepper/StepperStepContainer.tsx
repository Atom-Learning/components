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
  '&:focus-visible': {
    outline: 'none'
  },
  variants: {
    canInteract: { true: {} },
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
      default: { '&:not(:last-child)::after': { bg: '$grey200' } },
      active: { '&:not(:last-child)::after': { bg: '$primary800' } },
      success: { '&:not(:last-child)::after': { bg: '$success' } },
      viewed: { '&:not(:last-child)::after': { bg: '$grey600' } }
    },
    status: {
      completed: {},
      active: {},
      default: {},
      viewed: {},
      success: {},
      reviewed: {}
    }
  },
  compoundVariants: [
    {
      canInteract: true,
      status: 'completed',
      css: {
        '&:hover': {
          '& :first-child': { bg: '$primary900', color: 'white !important' },
          '& :last-child': { color: '$primary900' }
        },
        '&:focus-visible': {
          '& :first-child': {
            outline: '2px solid $primary800',
            outlineOffset: '2px'
          }
        }
      }
    },
    {
      canInteract: true,
      status: 'active',
      css: {
        '&:hover': {
          '& :first-child': { borderColor: '$grey800', color: '$grey1000' },
          '& :last-child': { color: '$grey1000' }
        },
        '&:focus-visible': {
          '& :first-child': {
            outline: '2px solid $primary800',
            outlineOffset: '2px'
          }
        }
      }
    },
    {
      canInteract: true,
      status: 'viewed',
      css: {
        '&:hover': {
          '& :first-child': { borderColor: '$grey800', color: '$grey1000' },
          '& :last-child': { color: '$grey1000' }
        },
        '&:focus-visible': {
          '& :first-child': {
            outline: '2px solid $primary800 !important',
            outlineOffset: '2px !important'
          }
        }
      }
    },
    {
      canInteract: true,
      status: 'reviewed',
      css: {
        '&:focus-visible': {
          '& :first-child': {
            outline: '2px solid $primary800 !important',
            outlineOffset: '2px !important'
          }
        }
      }
    }
  ]
})
