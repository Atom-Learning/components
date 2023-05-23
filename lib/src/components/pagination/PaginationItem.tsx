import * as React from 'react'

import { styled } from '../../stitches'
import { Box, Button } from '..'
import { usePagination } from './usePagination'
import type { IPaginationItemProps } from './types'
import { debounce } from 'throttle-debounce'
import { focusVisibleStyleBlock } from '~/utilities'

const Dot = styled(Box, {
  borderRadius: '$round',
  size: '4px',
  bg: '$accent9'
})

const StyledButton = styled(Button, {
  display: 'flex',
  flexDirection: 'column',
  p: '0 !important',
  fontWeight: 400,
  color: '$grey800 !important',
  bg: '$base1 !important',
  '&:not(:disabled)': {
    '&:hover': {
      bg: '$base2 !important',
      color: '$grey900 !important',
      [`& ${Dot}`]: {
        bg: '$accent10'
      }
    },
    '&:focus-visible': {
      bg: '$base1',
      [`& ${Dot}`]: {
        bg: '$accent9'
      },
      ...focusVisibleStyleBlock(),
      border: '2px solid $blue800',
      boxShadow: 'inset 0 0 0 2px $white',
      outline: 'unset'
    }
  },
  '&:disabled': {
    opacity: '0.3',
    cursor: 'not-allowed'
  },
  variants: {
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
    indicated: {
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

export const PaginationItem: React.FC<IPaginationItemProps> = ({
  pageNumber,
  css
}) => {
  const { currentPage, goToPage, indicatedPages, disabledPages, onItemHover } =
    usePagination()

  const isIndicated = Boolean(indicatedPages?.includes(pageNumber))
  const isDisabled = Boolean(disabledPages?.includes(pageNumber))

  const isSelected = currentPage === pageNumber

  const handleOnHover = () => {
    if (isSelected) return
    debounce(1000, () => onItemHover?.(pageNumber))
  }

  return (
    <StyledButton
      selected={isSelected}
      size="md"
      onClick={() => goToPage(pageNumber)}
      css={css}
      indicated={isIndicated}
      disabled={isDisabled}
      aria-current={isSelected && 'page'}
      aria-disabled={isDisabled}
      onMouseOver={handleOnHover}
    >
      {pageNumber}
      {isIndicated && <Dot />}
    </StyledButton>
  )
}
