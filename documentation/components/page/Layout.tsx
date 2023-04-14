import { Heading, Tabs, Box, StackContent } from '@atom-learning/components'

import Head from 'next/head'
import { Container, Header, Footer, Links, Pagination } from '.'
import { components } from '~/components/markdown/index'
import { MDXRemote } from 'next-mdx-remote'
import { TDynamicPage } from '~/lib/types/DynamicPage'
import { useState } from 'react'

export const Layout: React.FC<TDynamicPage> = (props) => {
  const { links, slug, tabs, title } = props
  const tabsLength = tabs?.length
  const hasContent = !!tabsLength

  const [activeTab, setactiveTab] = useState('tab0')

  return (
    <Tabs value={activeTab} onValueChange={setactiveTab}>
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
            {tabsLength > 1 && (
              <Tabs.TriggerList css={{ position: 'absolute', bottom: 0 }}>
                {tabs.map((tab, i) => (
                  <Tabs.Trigger key={tab.title} value={`tab${i}`}>
                    {tab.title}
                  </Tabs.Trigger>
                ))}
              </Tabs.TriggerList>
            )}
          </StackContent>
        </Header>

        {hasContent && (
          <Container css={{ py: '$5' }}>
            {tabs.map((tab, i) => (
              <Tabs.Content key={tab.title} value={`tab${i}`}>
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
