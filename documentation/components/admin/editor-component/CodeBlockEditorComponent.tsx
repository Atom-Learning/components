import * as React from 'react'
import { CodeBlock } from '~/components/markdown/editor-component/CodeBlock'

export const CodeBlockEditorComponent = {
  id: 'code-block',
  label: 'Code Block',
  collapsed: true,
  fields: [
    {
      label: 'Code',
      name: 'code',
      widget: 'code'
    },
    {
      label: 'Live',
      name: 'live',
      widget: 'boolean'
    },
    {
      label: 'Preview',
      name: 'preview',
      widget: 'boolean'
    }
  ],
  pattern:
    /^<CodeBlock live={(.*?)} preview={(.*?)} code={`(.*?)`} language={"(.*?)"} \/>$/ms,
  fromBlock: function (match) {
    return {
      live: match[1] === 'true',
      preview: match[2] === 'true',
      code: { code: match[3], lang: match[4] }
    }
  },
  toBlock: function (data) {
    return `<CodeBlock live={${!!data.live}} preview={${!!data.preview}} code={\`${
      data.code?.code
    }\`} language={"${data.code?.lang}"} />`
  },
  toPreview: function (data) {
    return <CodeBlock code={`${data.code?.code}`} language={data.code?.lang} />
  }
}
