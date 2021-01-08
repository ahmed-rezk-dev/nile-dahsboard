module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '\\.graphql$': ['graphql-let/jestTransformer', { subsequentTransformer: 'babel-jest' }],
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
        '^@styled(.*)$': '<rootDir>//components/styled$1',
        '^components(.*)$': '<rootDir>//components$1',
        '^generated(.*)$': '<rootDir>//generated$1',
        '^store(.*)$': '<rootDir>//store$1',
        '^@graphql(.*)$': '<rootDir>//graphql$1',
        '^utils(.*)$': '<rootDir>//utils$1',
        // '^@/(.*)$': '<rootDir>/$1',
    },
    // moduleDirectories: ['.', 'node_modules'],
    collectCoverage: true,
};
