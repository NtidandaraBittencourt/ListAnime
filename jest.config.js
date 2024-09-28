
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.mjs'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/.jest/mocks/fileMock.mjs',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    }
}