import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src', '<rootDir>/types'],
  snapshotSerializers: ['@atom-learning/jest-stitches'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/src/stitches.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1' // matches the path alias in tsconfig.json
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer'
  },
  globals: {
    "ts-jest": {},
    ResizeObserver: require('./src/mocks/ResizeOberserver')
  }
}

export default config

// module.exports = {
//   roots: ['<rootDir>/src', '<rootDir>/types'],
//   snapshotSerializers: ['@atom-learning/jest-stitches'],
//   collectCoverage: true,
//   coveragePathIgnorePatterns: ['/src/stitches.ts'],
//   testPathIgnorePatterns: ['/node_modules/'],
//   setupFilesAfterEnv: ['./jest-setup.ts'],
//   moduleNameMapper: {
//     '~/(.*)': '<rootDir>/src/$1' // matches the path alias in tsconfig.json
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': 'babel-jest',
//     '^.+\\.svg$': 'jest-svg-transformer'
//   }
// }
