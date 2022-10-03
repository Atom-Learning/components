import { Box, Flex, Heading, Text } from '@atom-learning/components'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { MdxRemote } from 'next-mdx-remote/types'
import * as React from 'react'

import { Container, Navigation } from '../components'
// import Components from '../sandbox/components'
import {
  getLatestLibVersion,
  getPages,
  transformNavigationStructure
} from '../utilities'

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

const Page: React.FC<PageProps> = ({ pages, version }) => (
  <>
    <Head>
      <title>Atom Learning | Components</title>
    </Head>
    <Flex>
      <Navigation items={pages} version={version} />
      <Box as="main" css={{ width: '100%' }}>
        <Box as="header" css={{ bg: '$tonal50', py: '$8' }}>
          <Container css={{ px: '$4' }}>
            <Heading as="h1" size="lg">
              Components
            </Heading>
          </Container>
        </Box>
        <Container css={{ px: '$4', py: '$8' }}>
          <Text size="lg" css={{ mb: '$8' }}>
            An environment for displaying all of our components in various
            configurations to help test and validate design consistency
          </Text>
          {/* <Components /> */}
        </Container>
      </Box>
    </Flex>
  </>
)

type Pages = [string, { category: string }[]][]

export const getStaticProps: GetStaticProps = async () => {
  const version = await getLatestLibVersion()
  const pages = (await getPages([
    'title',
    'source',
    'id',
    'category',
    'priority'
  ])) as Pages

  const transformedPages = transformNavigationStructure(pages)

  return {
    props: {
      pages: transformedPages,
      version
    }
  }
}

export default Page
