import * as React from 'react'

import { Flex } from '../flex'
import { Grid } from '../grid'
import { Heading } from '../heading'

interface ISectionProps extends React.ComponentProps<typeof Flex> {
  heading?: string
}

export const Section: React.FC<ISectionProps> & {
  Content: typeof Grid
} = ({ heading, children, css }) => {
  return (
    <Flex
      as="section"
      css={{
        bg: '$primaryLight',
        gap: '$5',
        p: 'calc($4 + $2)',
        flexDirection: 'column',
        borderRadius: '$0',
        ...css
      }}
    >
      {heading && (
        <Heading as="h3" css={{ pt: '$2' }}>
          {heading}
        </Heading>
      )}
      {children}
    </Flex>
  )
}

Section.Content = Grid
