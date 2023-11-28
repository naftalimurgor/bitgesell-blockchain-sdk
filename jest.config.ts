import { Config } from '@jest/types'
// https://github.com/kulshekhar/ts-jest/issues/2629
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: false,
  extensionsToTreatAsEsm: ['.ts'],
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'babel',
  roots: ['src/__tests__/'],
  transformIgnorePatterns: ['node_modules/(?!axios)'],
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  },
  testPathIgnorePatterns: ['src/types', 'src/__tests__/sdkConfig.ts'],
  // https://github.com/jest-community/jest-extended: Extended matchers
  setupFilesAfterEnv: ['jest-extended/all'],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  testTimeout: 70000 // 70000 ms
}

export default config
