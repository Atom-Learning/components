import { Box, Link, Text } from '@atom-learning/components'
import { default as NextLink } from 'next/link'
import * as React from 'react'

import { Container } from '../components'

type PaginationProps = {
  orderedPages: {
    id: string
    title: string
    source: 'overview' | 'theme' | 'components'
  }[]
  currentPage: {
    id: string
    source: 'overview' | 'theme' | 'components'
  }
}

const PaginationItem = ({
  align,
  label,
  page
}: {
  align: 'left' | 'right'
  label: string
  page: Record<string, string>
}) => (
  <Box css={{ textAlign: align, [align === 'left' ? 'mr' : 'ml']: 'auto' }}>
    <Text css={{ color: '$tonal500' }} size="sm">
      {label}
    </Text>
    <NextLink passHref href={`/${page.source}/${page.id}`}>
      {/* @ts-ignore */}
      <Link size="lg" css={{ display: 'block', py: '$2' }}>
        {page.title}
      </Link>
    </NextLink>
  </Box>
)

export const Pagination: React.FC<PaginationProps> = ({
  orderedPages,
  currentPage
}) => {
  const currentPageIndex = orderedPages.findIndex(
    ({ id, source }) => id === currentPage.id && source === currentPage.source
  )
  const nextPage = orderedPages[currentPageIndex + 1]
  const previousPage = orderedPages[currentPageIndex - 1]

  return (
    <Box as="footer" css={{ bg: '$tonal50', mt: '$9' }}>
      <Container css={{ display: 'flex', py: '$7', px: '$4' }}>
        {previousPage && (
          <PaginationItem align="left" label="Previous" page={previousPage} />
        )}
        {nextPage && (
          <PaginationItem align="right" label="Next" page={nextPage} />
        )}
      </Container>
    </Box>
  )
}
