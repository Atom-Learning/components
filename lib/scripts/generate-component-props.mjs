import fs from 'fs'
import glob from 'glob'
import docgen from 'react-docgen-typescript'

// remove all react specific types, including all valid props for the HTMLElement
const filterReactTypes = (prop) =>
  !prop.parent?.fileName.includes('@types/react') &&
  !prop.declarations?.some((declaration) =>
    declaration?.fileName.includes('@types/react')
  )

const run = async () => {
  try {
    const tsConfigParser = docgen.withCustomConfig('./tsconfig.json', {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: filterReactTypes
    })
    const componentFilePaths = await glob
      .sync('src/**/*.tsx')
      .filter((path) => !path.includes('test.tsx'))

    console.log(
      `\nExtracting props from:\n  ${componentFilePaths.join('\n  ')}`
    )

    const output = componentFilePaths.flatMap((path) =>
      tsConfigParser.parse(path)
    )

    await fs.mkdir('./dist', { recursive: true }, (err) => {
      if (err) throw err
    })
    await fs.writeFileSync('./dist/docgen.json', JSON.stringify(output))
  } catch (err) {
    throw new Error(err)
  }
}

run()
