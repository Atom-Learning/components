const docgen = require('react-docgen-typescript')
const fs = require('fs')
const glob = require('glob')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)

const filterReactTypes = (prop) =>
  !prop.parent?.fileName.includes('@types/react') &&
  !prop.declarations?.some((declaration) =>
    declaration?.fileName.includes('@types/react')
  )

const tsConfigParser = docgen.withCustomConfig('./tsconfig.json', {
  shouldExtractLiteralValuesFromEnum: true,
  propFilter: filterReactTypes
})

const run = async () => {
  try {
    const componentFilePaths = await glob.sync(`${__dirname}/../src/**/*.tsx`)
    const docgen = componentFilePaths
      .filter((path) => !path.includes('test.tsx'))
      .filter((path) => !path.includes('stories'))
      .map((path) => tsConfigParser.parse(path)[0])

    await writeFile('./dist/docgen.json', JSON.stringify({ docgen }, null, 2))
  } catch (err) {
    console.error(err)
  }
}

run()
