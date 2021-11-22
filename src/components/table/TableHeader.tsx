import { styled } from '~/stitches'
import React from 'react'

const StyledTableHeader = styled('thead', {
  variants: {
    theme: {
      primary: {
        '& th': {
          bg: '$primary'
        }
      },
      primaryDark: {
        '& th': {
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
