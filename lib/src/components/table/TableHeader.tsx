import React from 'react'

import { styled } from '~/stitches'

import { TableHeaderCell } from './TableHeaderCell'

export const TABLE_HEADER_THEMES = {
  PRIMARY: 'primary',
  PRIMARY_DARK: 'primaryDark',
  LIGHT: 'light'
}

const StyledTableHeader = styled('thead', {
  variants: {
    theme: {
      [TABLE_HEADER_THEMES.PRIMARY]: {
        [`${TableHeaderCell}`]: {
          bg: '$primary'
        }
      },
      [TABLE_HEADER_THEMES.PRIMARY_DARK]: {
        [`${TableHeaderCell}`]: {
          bg: '$primaryDark'
        }
      },
      [TABLE_HEADER_THEMES.LIGHT]: {
        [`${TableHeaderCell}`]: {
          bg: '$tonal50',
          color: '$tonal600'
        }
      }
    },
    isSticky: {
      true: {
        position: 'sticky',
        top: 0,
        zIndex: 3
      }
    }
  }
})

type TableHeaderProps = React.ComponentProps<typeof StyledTableHeader>

export const TableHeader: React.FC<TableHeaderProps> = ({
  theme = 'primaryDark',
  isSticky = false,
  ...rest
}: TableHeaderProps) => {
  return <StyledTableHeader theme={theme} isSticky={isSticky} {...rest} />
}

TableHeader.displayName = 'TableHeader'
