import * as React from 'react'

import { focusVisibleStyleBlock } from '~/utilities'

import { styled } from '../../stitches'
import { Box } from '..'
import type { IPaginationItemProps } from './types'
import { usePagination } from './usePagination'

const Dot = styled(Box, {
  borderRadius: '$round',
  size: '4px',
  bg: '$accent9'
})

const StyledButton = styled('button', {
  alignItems: 'center',
  border: 'unset',
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
  '&:not(:disabled)': {
    '&:active': {
      bg: '$base3'
    },
    '&:hover': {
      bg: '$base2',
      color: '$accent10',
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
      boxShadow: 'inset white 0px 0px 0px 2px',
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
        width: '$4',
        height: '$4'
      }
    },
    selected: {
      true: {
        border: '1px solid $accent9',
        color: '$accent9',
        fontWeight: 600,
        '&:hover': {
          borderColor: '$accent10',
          color: '$accent10'
        },
        '&:active': {
          borderColor: '$accent11',
          fontColor: '$accent11'
        },
        '&:focus-visible': {
          ...focusVisibleStyleBlock(),
          border: '2px solid $blue800'
        }
      }
    },
    indicated: {
      true: {
        fontWeight: 600,
        color: '$accent9',
        '&:hover': {
          color: '$accent10'
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
    onItemHover?.(pageNumber)
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
