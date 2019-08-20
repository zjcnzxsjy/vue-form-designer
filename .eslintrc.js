module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "quotes": [1, "double"],
    "no-mixed-spaces-and-tabs": [2, false], //禁止混用tab和空格
    "no-tabs": "off",
    "indent": [0, 2]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
