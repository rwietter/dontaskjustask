module.exports = {
  env: {
    browser: true,
    // es2020: true,
    es6: true,
    // jest: true,
  },
  extends: [
    'plugin:react/recommended',
    // 'plugin:prettier/recommended',
    // 'plugin:react-hooks/recommended',
    // 'prettier',
    'prettier/react',
    // 'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  /* 'jest' */
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    indent: ['error', 2],
    radix: 'error',
    'no-self-compare': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'no-compare-neg-zero': 'error',
    'no-dupe-else-if': 'error',
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    'array-callback-return': 'error',
    'operator-linebreak': [2, 'before', { overrides: { '?': 'after' } }],
    'block-scoped-var': 'error',
    eqeqeq: ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 90,
        tabWidth: 2,
      },
    ],
    // indent: [2, 'tab'],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^react/',
          `/^
          (assert
          |async_hooks
          |buffer
          |child_process
          |cluster
          |console
          |constants
          |crypto
          |dgram
          |dns
          |domain
          |events
          |fs
          |http
          |http2
          |https
          |inspector
          |module
          |net
          |os
          |path
          |perf_hooks
          |process
          |punycode
          |querystring
          |readline
          |repl
          |stream
          |string_decoder
          |timers
          |tls
          |trace_events
          |tty
          |url
          |util
          |v8
          |vm
          |zli
          )/`,
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    complexity: [
      'warn',
      {
        max: 3,
      },
    ],
    treatUndefinedAsUnspecified: 'off',
    eqeqeq: ['error', 'smart'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'typescript-eslint/interface-name-prefix': 'off',
    'typescript-eslint/no-vars-requires': 'off',
    'typescript-eslint/camelcase': 'off',
    'typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // 'import/no-dynamic-require': 'on',
    'no-param-reassing': 'off',
    'no-underscore-dangle': 'off',
    // 'react/prop-types': 'on',
    // 'jsx-a11y/label-has-for': 'on',
    // 'import/prefer-default-export': 'on',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-indent': [
      2,
      2,
      {
        indentLogicalExpressions: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
