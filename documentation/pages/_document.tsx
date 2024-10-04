import { getCssText } from '@atom-learning/components'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import * as React from 'react'

import polyfills from '../polyfills'

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="admin/config.yml"
          type="text/yaml"
          rel="cms-config-url"
        ></link>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <Script
          src={`https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=${encodeURIComponent(
            polyfills.join(',')
          )}`}
        />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
