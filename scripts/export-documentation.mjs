import fs from 'fs'
import glob from 'glob'
import path from 'path'

const outputDir = path.join('dist', 'docs')

const run = async () => {
  const documentationFilePaths = await glob.sync('**/*.{md,mdx}', {
    ignore: ['dist/**', 'node_modules/**']
  })

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }
  console.log(
    `\nPublishing documentation from:\n  ${documentationFilePaths.join('\n  ')}`
  )

  await Promise.all(
    documentationFilePaths.map((filePath) =>
      fs.copyFileSync(filePath, path.join(outputDir, path.basename(filePath)))
    )
  )
}

run()
