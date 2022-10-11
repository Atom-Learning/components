import { useRouter } from 'next/router'

import { getPageByFilename } from '~/lib/api'
import { TDynamicPage } from '~/lib/types/DynamicPage'

import { serialize } from "next-mdx-remote/serialize";

import { Layout as PageLayout } from '~/components/page/Layout'

type Props = {
    Page: TDynamicPage
    preview?: boolean
}

export default function Page({ Page, preview }: Props) {
    const router = useRouter()

    if (router.isFallback) return <div>Loading…</div>

    if (preview) return null;
    return <PageLayout {...Page} />

}

export const getStaticProps = async () => {
    const Page = getPageByFilename('landing/index', [
        'title',
        'tabs'
    ])

    const tabs = Page?.tabs ? await Promise.all(Page.tabs.map(async ({ content, ...rest }) => {
        const serializedContent = await serialize(content || '')
        return { content: serializedContent, ...rest }
    })) : []

    return {
        props: {
            Page: {
                ...Page,
                tabs
            },
        },
    }
}