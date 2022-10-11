import { Heading, Tabs, Box, StackContent } from '@atom-learning/components'

import Head from 'next/head'
import { CMS_NAME } from '~/lib/constants'
import { Container, Header, Footer, Links, Pagination } from '.'
import { components } from '~/components/markdown/index'
import { MDXRemote } from "next-mdx-remote";
import { TDynamicPage } from '~/lib/types/DynamicPage'

export const Layout: React.FC<TDynamicPage> = (props) => {
    const { links, slug, tabs, title } = props;

    const tabsLength = tabs?.length
    const hasContent = !!tabsLength;

    return (
        <Tabs defaultValue="tab0">
            <Head>
                <title>
                    {title} | Next.js Blog Example with {CMS_NAME}
                </title>
            </Head>
            <Box as="article" css={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header>
                    <StackContent>
                        <Heading as="h1" size="lg">{title}</Heading>
                        <Links {...links} />
                        {tabsLength > 1 && (
                            <Tabs.TriggerTokenList css={{ position: 'absolute', bottom: 0 }}>
                                {tabs.map((tab, i) => <Tabs.Trigger key={tab.title} value={`tab${i}`}>{tab.title}</Tabs.Trigger>)}
                            </Tabs.TriggerTokenList>
                        )}
                    </StackContent>
                </Header>

                {hasContent && (
                    <Container css={{ py: '$5' }}>
                        {tabs.map((tab, i) => (
                            <Tabs.Content key={tab.title} value={`tab${i}`}>
                                <MDXRemote {...tab.content} components={components} />
                            </Tabs.Content>
                        ))
                        }
                    </Container>)
                }

                <Footer>
                    <Pagination slug={slug} />
                </Footer>
            </Box>
        </Tabs>
    )
}
