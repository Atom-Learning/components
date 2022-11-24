import React from 'react'
import { Content } from '@radix-ui/react-accordion'
import { Box } from '../../box/Box'

export const SidedrawerAccordionContent: React.FC = ({ children }) => (
  <Content>
    {React.Children.map(children, (child) => {
      return (
        <Box
          css={{
            '> a': {
              px: '$6'
            },
            '> button': {
              px: '$6'
            }
          }}
        >
          {child}
        </Box>
      )
    })}
  </Content>
)
