// eslint-disable-next-line
import { default as changeCase } from 'change-case'
import fs from 'fs'
import path from 'path'
import prompts from 'prompts'
import kleur from 'kleur'

const { capitalCase, noCase, paramCase, pascalCase } = changeCase

/**
 * Each key represents the type of file to create and the value is a string of the contents
 */
const templates = {
  // Entry point to component
  index: ({ name }) => `export { ${name} } from './${name}'`,

  // Component definition with named export and minimal TS set-up
  component: ({ name }) => `import * as React from 'react'

type ${name}Props = {}

export const ${name}: React.FC<${name}Props> = (props) => {
  return null
}

${name}.displayName = '${name}'`,

  // Component test file with basic render test
  test: ({ name }) => `import { render } from '@testing-library/react'
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

  // Documentation with frontmatter set and single preview
  documentation: ({ name, category }) => `---
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

// values for prompt questions
const componentSources = [
  { title: 'Component', value: 'components' },
  { title: 'Utility', value: 'utilities' }
]
const documentationCategories = [
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

/**
 *
 * @param src string representing the path to search
 * @returns array of directory names within src
 */
const getDirectories = (src) =>
  fs
    .readdirSync(src, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

/**
 *
 * @param name string of component name in format provided by user
 * @param source string of src directory
 * @returns path
 */
const getComponentDirectory = (name, source) =>
  path.join('src', source, paramCase(name))

/**
 *
 * @param fileName string of component name in pascalCase
 * @param template function to return string content to write to file
 * @param response object of data from prompt
 * @returns Promise
 */
const writeFile = (fileName, template, response) =>
  fs.writeFileSync(
    path.join(getComponentDirectory(response.name, response.source), fileName),
    template(response)
  )

const run = async () => {
  const response = await prompts([
    {
      type: 'select',
      name: 'source',
      message: 'Are you creating a component or utility?',
      choices: componentSources
    },
    {
      type: 'text',
      name: 'name',
      format: (val) => pascalCase(val),
      message: (prev) =>
        `What is the ${noCase(
          componentSources.find(({ value }) => value === prev).title
        )} called?`,
      validate: (val) => {
        if (
          getDirectories(path.join('src', 'components')).includes(val) ||
          getDirectories(path.join('src', 'utilities')).includes(val)
        )
          return `${pascalCase(
            val
          )} already exists in components/ or utilities/`
        return true
      }
    },
    {
      // default to Utilities category if within utilities directory
      type: (_, { source }) => (source === 'utilities' ? null : 'select'),
      name: 'category',
      message: 'What category is it in?',
      choices: documentationCategories,
      format: (val) => documentationCategories[val]
    },
    {
      type: 'confirm',
      name: 'confirmation',
      message: (
        _,
        { name, source }
      ) => `Confirm that the following files should be created in ${getComponentDirectory(
        name,
        source
      )}/
    ${name}.mdx
    ${name}.tsx
    ${name}.test.tsx
    index.ts
`
    }
  ])

  const { name, confirmation, source } = response

  const directory = getComponentDirectory(name, source)

  // if user confirms that file structure is correct
  if (confirmation && !fs.existsSync(directory)) {
    // safe to do as we know the directory does not exist
    fs.mkdirSync(directory)
    // go and write files from templates with content
    await Promise.all([
      writeFile('index.ts', templates.index, response),
      writeFile(`${name}.tsx`, templates.component, response),
      writeFile(`${name}.test.tsx`, templates.test, response),
      writeFile(`${name}.mdx`, templates.documentation, response)
    ])

    console.log(
      `\n${kleur.green('✔')} Successfully created ${kleur.bold(name)}`
    )
  }
}

run()
