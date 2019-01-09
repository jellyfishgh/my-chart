module.exports = {
  root: true,
  extends: ['plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
