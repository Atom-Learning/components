import fs from 'fs'
import glob from 'glob'
import path from 'path'

const outputDir = path.join('dist', 'docs')

const run = async () => {
  const filePaths = await glob.sync('**/*.{md,mdx}', {
    ignore: ['dist/**', 'node_modules/**']
  })

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }

  await Promise.all(
    filePaths.map((filePath) =>
      fs.copyFileSync(filePath, path.join(outputDir, path.basename(filePath)))
    )
  )

  console.log({ filePaths })
}

run()
