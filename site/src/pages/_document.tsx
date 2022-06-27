import { getCssText } from '@atom-learning/components'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

import { polyfills } from '../../polyfills.json'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <script
            src={`https://polyfill.io/v3/polyfill.min.js?features=${encodeURIComponent(
              polyfills.join(',')
            )}`}
          />

          <NextScript />
        </body>
      </Html>
    )
  }
}
