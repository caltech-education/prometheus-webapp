module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y'
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-param-reassign": 0,
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "max-len": [ "error", { "code": 140 }],
    "react/state-in-constructor": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array",
        "readonly": "array"
      }
    ],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        "prefixWithI": "never"
      }
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error"
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  }
};
