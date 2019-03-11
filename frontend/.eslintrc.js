module.exports = {
    env:{
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jsx-a11y', 'eslint-plugin-immutable'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        }
    },
    settings: {
        'import/resolver' : {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    extends: [
        'react-app',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    rules: {
        'react/jsx-filename-extension' : [1, {extensions: ['.tsx' ]}],
        'spaced-comment': ['error', 'always', { markers: ['/']}],
        "immutable/no-mutation": 2
    },
    overrides: [
        {
          "rules": {
            "prefer-default-export": false
          },
          "files": ["*/*.ts{x}"]
        }
      ]
};