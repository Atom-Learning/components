import { Box } from '@atom-learning/components'
import * as React from 'react'
import { Container } from '~/components/page'

export const Footer = ({ children }) => {
  return (
    <Box as="footer" css={{ mt: 'auto', mb: '0', background: '$base2' }}>
      <Container css={{ py: '$6' }}>{children}</Container>
    </Box>
  )
}
