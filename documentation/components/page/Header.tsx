import * as React from 'react'
import { Box, Heading } from '@atom-learning/components'
import { Container } from '~/components/page'

export const Header = ({ children }) => {
  return (
    <Box as="header" css={{ background: '$base2' }}>
      <Container css={{ py: '$9', position: 'relative' }}>{children}</Container>
    </Box>
  )
}
