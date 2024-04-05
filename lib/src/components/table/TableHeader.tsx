import React from 'react'

import { styled } from '~/stitches'

import { TableHeaderCell } from './TableHeaderCell'

export const TABLE_HEADER_THEMES = {
  PRIMARY: 'primary',
  PRIMARY_DARK: 'primaryDark',
  PRIMARY_LIGHT: 'primaryLight',
  LIGHT: 'light',
  WHITE: 'white'
} as const

const StyledTableHeader = styled('thead', {
  variants: {
    theme: {
      [TABLE_HEADER_THEMES.PRIMARY]: {
        [`${TableHeaderCell}`]: {
          bg: '$primary800'
        }
      },
      [TABLE_HEADER_THEMES.PRIMARY_DARK]: {
        [`${TableHeaderCell}`]: {
          bg: '$primary1000'
        }
      },
      [TABLE_HEADER_THEMES.PRIMARY_LIGHT]: {
        [`${TableHeaderCell}`]: {
          bg: '$primary200',
          color: '$grey1000'
        }
      },
      [TABLE_HEADER_THEMES.LIGHT]: {
        [`${TableHeaderCell}`]: {
          bg: '$tonal50',
          color: '$grey1000'
        }
      },
      [TABLE_HEADER_THEMES.WHITE]: {
        [`${TableHeaderCell}`]: {
          bg: 'white',
          color: '$grey1000'
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

export const TableHeader = ({
  theme = 'primaryDark',
  isSticky = false,
  ...rest
}: TableHeaderProps) => {
  return <StyledTableHeader theme={theme} isSticky={isSticky} {...rest} />
}

TableHeader.displayName = 'TableHeader'
