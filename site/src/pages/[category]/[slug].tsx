import { Box, Flex, Heading, Text } from '@atom-learning/components'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MdxRemote } from 'next-mdx-remote/types'
import * as React from 'react'

import {
  Container,
  ExternalLinks,
  Navigation,
  Pagination,
  PropsTable
} from '../../components'
import {
  getLatestLibVersion,
  getPageBySlug,
  getPages,
  mdxToString,
  stringToMdx,
  transformNavigationStructure
} from '../../utilities'

type PageProps = {
  data: {
    component?: string
    description?: string
    title: string
    id: string
    homepage: string
    source: 'overview' | 'theme' | 'components'
  }
  content: MdxRemote.Source
  pages: {
    [key: string]: []
  }
  orderedPages: []
  version: string
}

const Page: React.FC<PageProps> = ({
  pages,
  orderedPages,
  content,
  data,
  version
}) => (
  <>
    <Head>
      <title>{`Atom Learning | ${data.title}`}</title>
    </Head>
    <Flex>
      <Navigation items={pages} version={version} />
      <Flex as="main" css={{ width: '100%', flexDirection: 'column' }}>
        <Box
          as="header"
          css={{ bg: '$tonal50', pt: '128px', pb: '$8', '@md': { py: '$8' } }}
        >
          <Container css={{ px: '$4' }}>
            <Heading as="h1" size="lg" css={data.component ? { mb: '$5' } : {}}>
              {data.title}
            </Heading>
            {data.component && (
              <ExternalLinks
                component={data.component}
                homepage={data.homepage}
              />
            )}
          </Container>
        </Box>
        <Container css={{ flex: 1, px: '$4', py: '$8' }}>
          {data.description && (
            <Text size="lg" css={{ mb: data.component ? '$5' : '$8' }}>
              {data.description}
            </Text>
          )}
          {stringToMdx(content)}
          {data.component && <PropsTable for={data.component} />}
        </Container>
        <Pagination
          orderedPages={orderedPages}
          currentPage={{ source: data.source, id: data.id }}
        />
      </Flex>
    </Flex>
  </>
)

type Pages = [string, { category: string }[]][]

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const version = await getLatestLibVersion()

  const pages = (await getPages([
    'title',
    'source',
    'id',
    'category',
    'priority'
  ])) as Pages

  const transformedPages = transformNavigationStructure(pages)
  const orderedPages = Object.keys(transformedPages).reduce(
    (arr, source) => [
      ...arr,
      ...Object.keys(transformedPages[source])
        .filter((category) => category !== 'void')
        .map((category) => transformedPages[source][category])
        .flat()
    ],
    []
  )

  const page = getPageBySlug(params.slug, params.category)
  const content = await mdxToString(page.content)

  return {
    props: {
      pages: transformedPages,
      orderedPages,
      data: page.data,
      version,
      content
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getPages(['source', 'id', 'priority'])
  const flattenedPages = pages.flatMap((source) => source[1])

  return {
    paths: flattenedPages.map(({ source, id }) => ({
      params: {
        category: source,
        slug: id
      }
    })),
    fallback: false
  }
}

export default Page
