import * as React from 'react'

import { disabledStyle, focusVisibleStyleBlock } from '~/utilities'

import { styled } from '../../stitches'
import type { PaginationPageProps } from './types'
import { usePagination } from './usePagination'

const StyledButton = styled('button', {
  alignItems: 'center',
  border: '1px solid transparent',
  borderRadius: '$0',
  cursor: 'pointer',
  fontFamily: '$body',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  p: '0',
  fontWeight: 400,
  color: '$grey800',
  bg: '$base1',
  position: 'relative',

  '&:not(:disabled)': {
    '&:hover': {
      color: '$accent10',
      bg: '$base2'
    },
    '&:active': {
      bg: '$base3',
      color: '$grey1000'
    },
    '&:focus-visible': {
      ...focusVisibleStyleBlock()
    }
  },
  '&[disabled]': {
    ...disabledStyle,
    pointerEvents: 'none'
  },
  variants: {
    size: {
      md: {
        width: '$4',
        height: '$4'
      }
    },
    selected: {
      true: {
        border: '1px solid $accent9',
        color: '$accent9',
        fontWeight: 600,
        '&:not(:disabled)': {
          '&:hover': {
            borderColor: '$accent10',
            color: '$accent10'
          },
          '&:active': {
            borderColor: '$accent11',
            fontColor: '$accent11'
          }
        }
      }
    },
    indicated: {
      true: {
        fontWeight: 600,
        color: 'white',
        bg: '$primary800',
        '&:not(:disabled)': {
          '&:hover': {
            color: 'white',
            bg: '$primary900'
          },
          '&:active': {
            color: 'white',
            bg: '$primary1000'
          }
        }
      }
    }
  },

  compoundVariants: [
    {
      selected: true,
      indicated: true,
      css: {
        fontWeight: 600,
        color: 'white',
        bg: '$primary800',
        '&:before': {
          content: '',
          position: 'absolute',
          zIndex: '-1',
          inset: '-3px',
          border: '1px solid $primary800',
          borderRadius: '$0',
          bg: 'transparent'
        },

        '&:not(:disabled)': {
          '&:hover': {
            color: 'white',
            bg: '$primary900'
          },
          '&:active': {
            color: 'white',
            bg: '$primary1000'
          }
        }
      }
    }
  ]
})

export const PaginationPage = ({
  pageNumber,
  css,
  onClick
}: PaginationPageProps) => {
  const { currentPage, goToPage, indicatedPages, disabledPages, onItemHover } =
    usePagination()

  const isIndicated = indicatedPages.includes(pageNumber)
  const isDisabled = disabledPages.includes(pageNumber)

  const isSelected = currentPage === pageNumber

  const handleOnHover = () => {
    if (isSelected || isDisabled) return
    onItemHover?.(pageNumber)
  }

  const handleOnClick = (pageNumber) => {
    onClick?.()
    goToPage(pageNumber)
  }

  return (
    <StyledButton
      selected={isSelected}
      size="md"
      onClick={() => handleOnClick(pageNumber)}
      css={css}
      indicated={isIndicated}
      disabled={isDisabled}
      aria-current={isSelected && 'page'}
      aria-disabled={isDisabled}
      onMouseOver={handleOnHover}
    >
      {pageNumber}
    </StyledButton>
  )
}
