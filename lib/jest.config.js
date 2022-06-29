module.exports = {
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['@atom-learning/jest-stitches'],
  coveragePathIgnorePatterns: ['/src/stitches.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1' // matches the path alias in tsconfig.json
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'es-jest'
  }
}
