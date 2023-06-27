import * as React from 'react'

import { CSS, styled } from '~/stitches'

import { Flex } from '../../flex'
import { DataTable } from '..'
import { useDataTable } from '../DataTableContext'
import {
  BulkActionsDefaultActions,
  BulkActionsSelectedRowActions
} from './components'

interface DataTableBulkActionsProps {
  customStyling?: CSS
  children: [
    React.ReactElement<React.ComponentProps<typeof BulkActionsDefaultActions>>,
    React.ReactElement<
      React.ComponentProps<typeof BulkActionsSelectedRowActions>
    >
  ]
}

const StyledContainer = styled(Flex, {
  p: '$2',
  bg: 'transparent',
  width: '100%',
  mb: '$2',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '$6',
  borderTopLeftRadius: '$0',
  borderTopRightRadius: '$0',
  variants: {
    isRowSelected: {
      true: {
        bg: '$primaryLight'
      }
    }
  }
})

export const DataTableBulkActions: React.FC<DataTableBulkActionsProps> & {
  DefaultActions: typeof BulkActionsDefaultActions
  SelectedRowActions: typeof BulkActionsSelectedRowActions
} = ({ children, customStyling }) => {
  const { rowSelection } = useDataTable()

  const isRowSelected = Object.keys(rowSelection || {}).length > 0

  return (
    <StyledContainer isRowSelected={isRowSelected} css={customStyling}>
      <DataTable.MetaData />

      <Flex css={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        {children}
      </Flex>
    </StyledContainer>
  )
}

DataTableBulkActions.DefaultActions = BulkActionsDefaultActions
DataTableBulkActions.SelectedRowActions = BulkActionsSelectedRowActions
