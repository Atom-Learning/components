import { Heading, Tabs, Box, StackContent } from '@atom-learning/components'

import Head from 'next/head'
import { Container, Header, Footer, Links, Pagination } from '.'
import { components } from '~/components/markdown/index'
import { MDXRemote } from 'next-mdx-remote'
import { TDynamicPage } from '~/lib/types/DynamicPage'
import { useQueryParams } from '~/utilities/hooks/useQueryParams'
import { useEffect, useState } from 'react'
import kebabCase from 'lodash.kebabcase'

export const Layout: React.FC<TDynamicPage> = (props) => {
  const { links, slug, tabs, title } = props
  const tabsLength = tabs?.length
  const hasContent = !!tabsLength
  const { queryParams, updateQueryParams } = useQueryParams()

  const [tab, setTab] = useState(kebabCase(tabs?.[0]?.title))
  useEffect(() => {
    if (queryParams.tab) setTab(queryParams.tab)
  }, [queryParams.tab])

  const isShowingTabs = tabs.length > 1
  useEffect(() => {
    if (isShowingTabs) updateQueryParams({ tab }, { method: 'replace' })
  }, [isShowingTabs, tab, updateQueryParams])

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <Head>
        <title>{title ? `${title} | ` : ''}Atom Learning Design System</title>
      </Head>
      <Box
        as="article"
        css={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Header>
          <StackContent>
            <Heading as="h1" size="lg">
              {title}
            </Heading>
            <Links {...links} />
            {isShowingTabs && (
              <Tabs.TriggerList css={{ position: 'absolute', bottom: 0 }}>
                {tabs.map((tab) => (
                  <Tabs.Trigger key={tab.title} value={kebabCase(tab.title)}>
                    {tab.title}
                  </Tabs.Trigger>
                ))}
              </Tabs.TriggerList>
            )}
          </StackContent>
        </Header>

        {hasContent && (
          <Container css={{ py: '$5' }}>
            {tabs.map((tab) => (
              <Tabs.Content key={tab.title} value={kebabCase(tab.title)}>
                <StackContent>
                  <MDXRemote {...tab.content} components={components} />
                </StackContent>
              </Tabs.Content>
            ))}
          </Container>
        )}

        <Footer>
          <Pagination slug={slug} />
        </Footer>
      </Box>
    </Tabs>
  )
}
