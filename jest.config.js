module.exports = {
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['@atom-learning/jest-stitches'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/src/stitches.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1', // matches the path alias in tsconfig.json
    '^react$': '<rootDir>/node_modules/react'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  }
}
