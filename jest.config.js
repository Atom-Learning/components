module.exports = {
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['jest-stitches'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/src/stitches.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./setupFiles.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1' // matches the path alias in tsconfig.json
  }
}
