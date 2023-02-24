import { Box, Link, Text, Flex } from '@atom-learning/components'
import { default as NextLink } from 'next/link'
import * as React from 'react'

import buildConstants from '~/lib/build/constants.json'

function flat(array) {
  var result = [];
  if (!Array.isArray(array)) return result
  array.forEach(function (a) {
    result.push(a);
    if (Array.isArray(a.children)) {
      result = result.concat(flat(a.children));
    }
  });
  return result;
}

const navigationStructure = buildConstants['navigation-structure']
const navigationStructureFlat = flat(navigationStructure)

type TPaginationItem = {
  align: 'left' | 'right'
  label: string
  page: Record<string, string>
}

const PaginationItem = ({
  align,
  label,
  page
}: TPaginationItem) => (
  <Box css={{ textAlign: align, [align === 'left' ? 'mr' : 'ml']: 'auto' }}>
    <Text css={{ color: '$base7' }} size="sm">
      {label}
    </Text>
    <NextLink passHref href={`${page.href}`}>
      {/* @ts-ignore */}
      <Link size="lg" css={{ display: 'block', py: '$2' }}>
        {page.title}
      </Link>
    </NextLink>
  </Box>
)

type TPaginationProps = {
  slug: string
}

export const Pagination: React.FC<TPaginationProps> = ({
  slug: currSlug,
}) => {
  const currentPageIndex = navigationStructureFlat.findIndex(
    ({ slug }) => slug === currSlug
  )
  const nextPage = navigationStructureFlat[currentPageIndex + 1]
  const previousPage = navigationStructureFlat[currentPageIndex - 1]

  return (
    <Flex>
      {previousPage && (
        <PaginationItem align="left" label="Previous" page={previousPage} />
      )}
      {nextPage && (
        <PaginationItem align="right" label="Next" page={nextPage} />
      )}
    </Flex>
  )
}
