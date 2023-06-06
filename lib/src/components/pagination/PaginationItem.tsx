import * as React from 'react'

import { focusVisibleStyleBlock } from '~/utilities'

import { styled } from '../../stitches'
import { Box } from '..'
import type { IPaginationItemProps } from './types'
import { usePagination } from './usePagination'

const Dot = styled(Box, {
  position: 'absolute',
  bottom: '-$1',
  left: '0',
  transform: 'translateX(50%)',
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
        color: '$accent9',
        '&:not(:disabled)': {
          '&:hover': {
            color: '$accent10',
            [`& ${Dot}`]: {
              bg: '$accent10'
            }
          },
          '&:active': {
            color: '$accent11',
            [`& ${Dot}`]: {
              bg: '$accent11'
            }
          }
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

  const isIndicated = indicatedPages.includes(pageNumber)
  const isDisabled = disabledPages.includes(pageNumber)

  const isSelected = currentPage === pageNumber

  const handleOnHover = () => {
    if (isSelected || isDisabled) return
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
      {isIndicated ? (
        <Box css={{ position: 'relative' }}>
          {pageNumber}
          <Dot />
        </Box>
      ) : (
        pageNumber
      )}
    </StyledButton>
  )
}
