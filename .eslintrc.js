module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-native/all'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['react', 'react-native'],
    rules: {
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        'react-native/no-inline-styles': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {}, // TypeScript 경로 매핑 지원
        },
    },
};
