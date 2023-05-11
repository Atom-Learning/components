import * as React from 'react'

import { CSS, styled } from '../../stitches'
import { Box, Button } from '..'
import { usePagination } from './pagination-context/PaginationContext'

const StyledButton = styled(Button, {
  display: 'flex',
  flexDirection: 'column',
  p: '0 !important',
  fontWeight: 400,
  color: '$grey800 !important',
  bg: '$base1 !important',
  '&:hover': {
    bg: '$base2 !important'
  },
  '&:focus': {
    bg: '$base1',
    border: '2px solid $blue800',
    boxShadow: 'inset 0 0 0 2px $white'
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
        '&:hover': {
          borderColor: '$accent10'
        }
      }
    }
  }
})

const Dot = styled(Box, {
  borderRadius: '$round',
  size: '4px',
  background: '$accent9'
})

export const PaginationPageButton: React.FC<{
  pageNumber: number
  css?: CSS
}> = ({ pageNumber, css }) => {
  const { currentPage, goToPage } = usePagination()

  const isButtonSelected = currentPage === pageNumber
  return (
    <StyledButton
      selected={isButtonSelected}
      size="md"
      onClick={() => goToPage(pageNumber)}
      css={css}
    >
      {pageNumber}
      <Dot />
    </StyledButton>
  )
}
