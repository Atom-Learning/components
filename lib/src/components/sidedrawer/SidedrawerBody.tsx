import React, { isValidElement } from 'react'

import { Box } from '../box'
import { SidedrawerAccordionRoot } from './SidedrawerAccordion/'

export const SidedrawerBody: React.FC = ({ children }) => {
  let hasAccordionItems = false

  React.Children.forEach(children, (child) => {
    if (isValidElement(child) && child.props?.value) {
      hasAccordionItems = true
    }
  })

  return (
    <Box
      css={{
        height: 'calc(100% - $6)',
        width: '100%',
        overflowY: 'auto'
      }}
    >
      {hasAccordionItems ? (
        <SidedrawerAccordionRoot type="single">
          {children}
        </SidedrawerAccordionRoot>
      ) : (
        children
      )}
    </Box>
  )
}
