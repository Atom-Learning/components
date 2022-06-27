import { readdirSync } from 'fs'
import { platform } from 'os'
import { isAbsolute, normalize } from 'path'

const isWindows = platform() === 'win32'
const delimiter = isWindows ? '\\' : '/'

export const trueCasePathSync = _trueCasePath()

function getRelevantFilePathSegments(filePath) {
  return filePath.split(delimiter).filter((s) => s !== '')
}

function escapeString(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function matchCaseInsensitive(fileOrDirectory, directoryContents, filePath) {
  const caseInsensitiveRegex = new RegExp(
    `^${escapeString(fileOrDirectory)}$`,
    'i'
  )
  for (const file of directoryContents) {
    if (caseInsensitiveRegex.test(file)) return file
  }
  throw new Error(
    `[true-case-path]: Called with ${filePath}, but no matching file exists`
  )
}

function _trueCasePath() {
  return (filePath, basePath) => {
    if (basePath) {
      if (!isAbsolute(basePath)) {
        throw new Error(
          `[true-case-path]: basePath argument must be absolute. Received "${basePath}"`
        )
      }
      basePath = normalize(basePath)
    }
    filePath = normalize(filePath)
    const segments = getRelevantFilePathSegments(filePath)
    if (isAbsolute(filePath)) {
      if (basePath) {
        throw new Error(
          '[true-case-path]: filePath must be relative when used with basePath'
        )
      }
      basePath = isWindows
        ? segments.shift().toUpperCase() // drive letter
        : ''
    } else if (!basePath) {
      basePath = process.cwd()
    }
    return iterateSync(basePath, filePath, segments)
  }
}

function iterateSync(basePath, filePath, segments) {
  return segments.reduce(
    (realPath, fileOrDirectory) =>
      realPath +
      delimiter +
      matchCaseInsensitive(
        fileOrDirectory,
        readdirSync(realPath + delimiter),
        filePath
      ),
    basePath
  )
}
