import React from 'react'

import { styled } from '~/stitches'
import { useDataTable } from '../data-table'

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
    }
  }
})

type TableHeaderProps = React.ComponentProps<typeof StyledTableHeader> & {
  numberOfStickyColumns?: number
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  theme = 'primaryDark',
  numberOfStickyColumns = 0,
  css,
  ...rest
}: TableHeaderProps) => (
  <StyledTableHeader
    theme={theme}
    css={{
      ...(numberOfStickyColumns === 1 && {
        '& th:nth-of-type(1)': {
          position: 'sticky',
          left: '0',
          zIndex: '2'
        }
      }),
      ...css
    }}
    {...rest}
  />
)

TableHeader.displayName = 'TableHeader'
