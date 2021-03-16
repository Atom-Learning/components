import changeCase from 'change-case/dist/index.js' // default export not found in 'change-case' for some reason
import fs from 'fs'
import path from 'path'
import prompts from 'prompts'

const { capitalCase, pascalCase, paramCase, noCase } = changeCase

const sources = ['Component', 'Utility']
const categories = [
  'Overview',
  'Layout',
  'Content',
  'Surfaces',
  'Media',
  'Navigation',
  'Forms',
  'Feedback',
  'Utilities'
]

const getDirectories = (src) =>
  fs
    .readdirSync(src, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

const templates = {
  index: (name) => `export { ${name} } from './${name}'`,
  component: (name) => `import * as React from 'react'

type ${name}Props = {}

export const ${name}: React.FC<${name}Props> = (props) => {
  return null
}

${name}.displayName = '${name}'`,
  test: (name) => `import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ${name} } from '.'

describe("${name} component", () => {
  it('renders', async () => {
    const { container } = render(<${name} />)

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})`,
  documentation: (name, category) => `---
title: ${capitalCase(name)}
component: ${name}
description: This is the description
category: ${category}
---

\`\`\`jsx preview
<${name} />
\`\`\`
`
}

const run = async () => {
  const response = await prompts([
    {
      type: 'select',
      name: 'source',
      message: 'Are you creating a component or utility?',
      choices: sources,
      format: (val) => sources[val]
    },
    {
      type: 'text',
      name: 'componentName',
      message: (prev) => `What is the ${noCase(prev)} called?`,
      format: (val) => pascalCase(val),
      validate: (val) => {
        if (
          getDirectories(path.join('src', 'components')).includes(val) ||
          getDirectories(path.join('src', 'utilities')).includes(val)
        )
          return `${pascalCase(val)} already exists`
        return true
      }
    },
    {
      type: (_, { source }) => (source === 'Utility' ? null : 'select'),
      name: 'category',
      message: 'What category is it in?',
      choices: categories,
      format: (val) => categories[val]
    },
    {
      type: 'confirm',
      name: 'confirmation',
      initial: true,
      message: (
        _,
        { componentName, source }
      ) => `Confirm that the following files should be created:

${source === 'Utility' ? 'utilities' : 'components'}/
  ${paramCase(componentName)}/
    ${componentName}.mdx
    ${componentName}.tsx
    ${componentName}.test.tsx
    index.ts

`
    }
  ])

  const { componentName, category, confirmation, source } = response
  const directory = path.join(
    'src',
    source === 'Utility' ? 'utilities' : 'components',
    paramCase(componentName)
  )

  if (confirmation && !fs.existsSync(directory)) {
    fs.mkdirSync(directory)

    fs.writeFileSync(
      path.join(directory, 'index.ts'),
      templates.index(componentName)
    )
    fs.writeFileSync(
      path.join(directory, `${componentName}.tsx`),
      templates.component(componentName)
    )
    fs.writeFileSync(
      path.join(directory, `${componentName}.test.tsx`),
      templates.test(componentName)
    )
    fs.writeFileSync(
      path.join(directory, `${componentName}.mdx`),
      templates.documentation(componentName, category)
    )
  }
}

run()
