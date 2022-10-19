// @ts-nocheck
import { globalCss } from '@atom-learning/components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { useIsMounted } from '~/utilities/hooks/useIsMounted'

import { Layout as AppLayout } from "~/components/app";


globalCss({
  '*': { boxSizing: 'border-box' },
  body: { margin: 0 }
})()


// This placement of `<Layout />` at this level should make it 
// so the page, inc `nav` is not refreshed when navigating.
// When in dev mode the whole app rebuilds on navigation.
// https://stackoverflow.com/questions/56817613/next-js-links-refresh-the-page
// https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  if (typeof window === 'undefined') return null;

  let Layout = AppLayout;
  if (Component.displayName === 'Admin') Layout = React.Fragment

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
            #__next {
              display: flex
            }
          `}</style>
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}

export default App
