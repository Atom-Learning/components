import * as React from 'react'

import { styled } from '../../stitches'
import { Box, Button } from '..'
import { usePagination } from './pagination-context/PaginationContext'
import { PaginationItemProps } from './types'

const StyledButton = styled(Button, {
  display: 'flex',
  flexDirection: 'column',
  p: '0 !important',
  fontWeight: 400,
  color: '$grey800 !important',
  bg: '$base1 !important',
  '&:hover': {
    bg: '$base2 !important',
    color: '$grey900 !important'
  },
  '&:focus': {
    bg: '$base1',
    border: '2px solid $blue800',
    boxShadow: 'inset 0 0 0 2px $white'
  },
  '&:disabled': {
    opacity: '0.2'
  },
  variants: {
    popover: {
      true: {
        bg: '$white !important'
      }
    },
    size: {
      md: {
        width: '$4'
      }
    },
    selected: {
      true: {
        border: '1px solid $accent9',
        fontWeight: 600,
        '&:hover': {
          borderColor: '$accent10'
        }
      }
    },
    isCompleted: {
      true: {
        fontWeight: 600,
        color: '$accent9 !important',
        '&:hover': {
          color: '$accent10 !important'
        }
      }
    }
  }
})

const Dot = styled(Box, {
  borderRadius: '$round',
  size: '4px',
  bg: '$accent9',
  '&:hover': {
    bg: '$accent10'
  },
  '&:focus': {
    bg: '$accent9'
  }
})

export const PaginationItem: React.FC<PaginationItemProps> = ({
  pageNumber,
  css,
  isPopoverButton = false,
  onClick
}) => {
  const { currentPage, goToPage, indicatedPages, disabledPages } =
    usePagination()

  const isPaginationItemIndicated = Boolean(
    indicatedPages?.includes(pageNumber)
  )
  const isPaginationItemDisabled = Boolean(disabledPages?.includes(pageNumber))

  const isButtonSelected = currentPage === pageNumber

  const handleClick = () => {
    if (onClick) {
      return onClick(() => goToPage(pageNumber))
    }

    goToPage(pageNumber)
  }

  return (
    <StyledButton
      selected={isButtonSelected}
      size="md"
      onClick={handleClick}
      css={css}
      popover={isPopoverButton}
      isCompleted={isPaginationItemIndicated}
      disabled={isPaginationItemDisabled}
      aria-current={isButtonSelected && 'page'}
      aria-disabled={isPaginationItemDisabled}
    >
      {pageNumber}
      {isPaginationItemIndicated && <Dot />}
    </StyledButton>
  )
}
