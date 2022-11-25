import React, { isValidElement } from 'react'

import { Box } from '../box'
import { SidedrawerAccordion } from './SidedrawerAccordion'

export const SidedrawerContent: React.FC = ({ children }) => {
  let hasAccordionItems = false

  React.Children.forEach(children, (child) => {
    if (isValidElement(child) && child.props?.value) {
      hasAccordionItems = true
    }
  })

  return (
    <Box
      css={{
        height: 'calc(100% - ($6 * 2))',
        width: '100%',
        overflowY: 'auto'
      }}
    >
      {hasAccordionItems ? (
        <SidedrawerAccordion type="single">{children}</SidedrawerAccordion>
      ) : (
        children
      )}
    </Box>
  )
}
