import React from 'react'

import { styled } from '~/stitches'

import { TableHeaderCell } from './TableHeaderCell'

const StyledTableHeader = styled('thead', {
  variants: {
    theme: {
      primary: {
        [`${TableHeaderCell}`]: {
          bg: '$primary'
        }
      },
      primaryDark: {
        [`${TableHeaderCell}`]: {
          bg: '$primaryDark'
        }
      }
    }
  }
})

type TableHeaderProps = React.ComponentProps<typeof StyledTableHeader>

export const TableHeader: React.FC<TableHeaderProps> = ({
  theme = 'primaryDark',
  ...rest
}: TableHeaderProps) => <StyledTableHeader theme={theme} {...rest} />

TableHeader.displayName = 'TableHeader'
