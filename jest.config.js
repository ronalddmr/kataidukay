module.exports = {
  testMatch: [
    '**/**/specs/*spec.js?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  coveragePathIgnorePatterns: [],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  moduleNameMapper: {
    '\\.(css|scss|svg|png|jpg|jpeg)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
