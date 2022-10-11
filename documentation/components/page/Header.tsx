import * as React from 'react'
import { Box } from '@atom-learning/components'
import { Container } from '~/components/page'

export const Header = ({ children }) => {
    return (
        <Box as="header" css={{ background: '$tonal100' }}>
            <Container css={{ py: '$9', position: 'relative' }}>
                {children}
            </Container>
        </Box>
    )
}