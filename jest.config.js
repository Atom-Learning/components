module.exports = {
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['@atom-learning/jest-stitches'],
  coveragePathIgnorePatterns: ['/src/stitches.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1', // matches the path alias in tsconfig.json
    '^react$': '<rootDir>/node_modules/react'
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    // node_modules that need to be transformed because they are pure ESM modules.
    'node_modules/(?!mdast|micromark|(parse|character|stringify)-entities|unist-util)'
  ]
}
