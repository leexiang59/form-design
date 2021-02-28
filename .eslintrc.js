module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    // 开启ESLint默认规则
    'eslint:recommended',
    // Vue单文件组件的模板和脚本部分的代码校验
    'plugin:vue/essential',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
