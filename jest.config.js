module.exports = {
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['@atom-learning/jest-stitches'],
  coveragePathIgnorePatterns: ['/src/stitches.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1', // matches the path alias in tsconfig.json
    '^react$': '<rootDir>/node_modules/react',
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  }
}
