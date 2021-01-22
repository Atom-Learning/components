module.exports = {
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['jest-stitches'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/src/stitches.ts'],
  testPathIgnorePatterns: ['/node_modules/']
}
