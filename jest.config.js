module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.js$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  transformIgnorePatterns: ['/node_modules'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
    '\\.svg$': '<rootDir>/fileTransformer.js',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
