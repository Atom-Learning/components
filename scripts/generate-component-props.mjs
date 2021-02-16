import fs from 'fs'
import glob from 'glob'
import docgen from 'react-docgen-typescript'

// remove all react specific types, including all valid props for the HTMLElement
const filterReactTypes = (prop) =>
  !prop.parent?.fileName.includes('@types/react') &&
  !prop.declarations?.some((declaration) =>
    declaration?.fileName.includes('@types/react')
  )

const tsConfigParser = docgen.withCustomConfig('./tsconfig.json', {
  shouldExtractLiteralValuesFromEnum: true,
  shouldExtractValuesFromUnion: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: filterReactTypes
})

const run = async () => {
  try {
    const componentFilePaths = await glob
      .sync('src/**/*.tsx')
      .filter((path) => !path.includes('test.tsx'))

    console.log(
      `\nExtracting props from:\n  ${componentFilePaths.join('\n  ')}`
    )

    const ouput = componentFilePaths.map(
      (path) => tsConfigParser.parse(path)[0]
    )

    await fs.writeFileSync('./dist/docgen.json', JSON.stringify(ouput))
  } catch (err) {
    console.error(err)
  }
}

run()
