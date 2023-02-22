import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

const { getPageByFilename, getAllPages } = require('~/lib/api.cjs')
import { TDynamicPage } from '~/lib/types/DynamicPage'
import remarkGfm from 'remark-gfm'

import { serialize } from "next-mdx-remote/serialize";

import { Layout as PageLayout } from '~/components/page/Layout'

type Props = {
  Page: TDynamicPage
  preview?: boolean
}

export default function Page({ Page, preview }: Props) {
  const { slug } = Page;

  const router = useRouter()

  if (!router.isFallback && !slug) return <ErrorPage statusCode={404} />

  if (router.isFallback) return <div>Loading…</div>

  if (preview) return null;
  return <PageLayout {...Page} />

}

type Params = {
  params: {
    slug: string[]
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const nestedSlug = params.slug
  const Page = getPageByFilename(nestedSlug.join('.'), [
    'slug',
    'title',
    'links',
    'tabs'
  ])

  const tabs = Page?.tabs ? await Promise.all(Page.tabs.map(async ({ content, ...rest }) => {
    const serializedContent = await serialize(content || '', { mdxOptions: { remarkPlugins: [remarkGfm] } })
    return { content: serializedContent, ...rest }
  })) : []

  return {
    props: {
      Page: {
        ...Page,
        tabs,
        nestedSlug: nestedSlug
      },
    },
  }
}

export const getStaticPaths = async () => {
  const Pages = getAllPages(['nestedSlug'])

  return {
    paths: Pages.map((Page) => {
      return {
        params: {
          slug: Page.nestedSlug
        },
      }
    }),
    fallback: false,
  }
}
