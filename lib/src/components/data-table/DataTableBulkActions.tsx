import * as React from 'react'

import { Button } from '~/components/button'
import { Divider } from '~/components/divider'
import { CSS, styled } from '~/stitches'

import { Flex } from '../flex'
import { DataTable } from '.'
import { useDataTable } from './DataTableContext'

interface DataTableBulkActionsProps {
  css?: CSS
  children:
    | React.ReactElement<React.ComponentProps<typeof BulkActionsDefaultActions>>
    | React.ReactElement<
        React.ComponentProps<typeof BulkActionsSelectedRowActions>
      >
    | [
        React.ReactElement<
          React.ComponentProps<typeof BulkActionsDefaultActions>
        >,
        React.ReactElement<
          React.ComponentProps<typeof BulkActionsSelectedRowActions>
        >
      ]
}

interface BulkActionsSelectedRowActionsProps {
  cancelLabel?: string
  children: React.ReactNode
}

const StyledContainer = styled(Flex, {
  p: '$2',
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
        bg: '$blue100'
      }
    }
  }
})

const BulkActionsDefaultActions = ({
  children
}: {
  children: React.ReactElement
}): React.ReactElement | null => {
  const { rowSelection } = useDataTable()

  if (Object.keys(rowSelection || {}).length > 0) return null

  return children
}

const BulkActionsSelectedRowActions: React.FC<
  BulkActionsSelectedRowActionsProps
> = ({ cancelLabel = 'Cancel', children }) => {
  const { toggleAllPageRowsSelected, rowSelection } = useDataTable()

  const handleDeselectAllPageRows = () => toggleAllPageRowsSelected(false)

  if (Object.keys(rowSelection || {}).length === 0) return null

  return (
    <>
      {children}
      {React.Children.count(children) > 0 && (
        <Divider orientation="vertical" css={{ mx: '$4' }} />
      )}
      <Button theme="neutral" onClick={handleDeselectAllPageRows}>
        {cancelLabel}
      </Button>
    </>
  )
}

export const DataTableBulkActions: React.FC<DataTableBulkActionsProps> & {
  DefaultActions: typeof BulkActionsDefaultActions
  SelectedRowActions: typeof BulkActionsSelectedRowActions
} = ({ children, ...rest }) => {
  const { rowSelection } = useDataTable()

  const isRowSelected = Object.keys(rowSelection || {}).length > 0

  return (
    <StyledContainer isRowSelected={isRowSelected} {...rest}>
      <DataTable.MetaData />
      <Flex justify="flex-end" align="center">
        {children}
      </Flex>
    </StyledContainer>
  )
}

DataTableBulkActions.DefaultActions = BulkActionsDefaultActions
DataTableBulkActions.SelectedRowActions = BulkActionsSelectedRowActions
