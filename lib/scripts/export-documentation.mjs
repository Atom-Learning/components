import chokidar from 'chokidar'
import fs from 'fs'
import glob from 'glob'
import path from 'path'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const outputDir = path.join('dist', 'docs')
const inputGlob = '**/*.{md,mdx}'
const { watch } = yargs(hideBin(process.argv)).option('watch').argv

const filesToFilter = ['CHANGELOG.md', 'LICENSE.md', 'README.md']

const copyFileToOutput = (filePath) => {
  fs.copyFileSync(filePath, path.join(outputDir, path.basename(filePath)))
}

const run = async () => {
  const documentationFilePaths = await glob
    .sync(inputGlob, {
      ignore: ['dist/**', 'node_modules/**']
    })
    .filter((filePath) => !filesToFilter.includes(filePath))
  // create output directory if missing
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

  console.log(
    `\nPublishing documentation from:\n  ${documentationFilePaths.join('\n  ')}`
  )

  await Promise.all(documentationFilePaths.map(copyFileToOutput))
}

if (watch) {
  const watcher = chokidar.watch(inputGlob, {
    ignored: /node_modules|dist/,
    ignoreInitial: 'src',
    persistent: true
  })

  console.log(`\nWatching ${inputGlob} for additions or changes\n`)

  // any MD/MDX additions/changes in the root dir will copy over to output dir
  watcher
    .on('add', (filePath) => {
      console.log(`  Added:   ${filePath}`)
      copyFileToOutput(filePath)
    })
    .on('change', (filePath) => {
      console.log(`  Changed: ${filePath}`)
      copyFileToOutput(filePath)
    })
} else {
  run()
}
