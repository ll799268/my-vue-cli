module.exports = {
  // 不往父级查找
  root: true,
  // 环境配置
  env: {
    node: true
  },
  // 拓展规则
  extends: [
    'airbnb-base',
    'plugin:vue/essential' // vue拓展规则
  ],
  // 自动规则，会覆盖一部分拓展规则
  rules: {
    semi: 'off',
    'eol-last': 'off',
    'no-new': 'off',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-danger': 'off',
    'no-useless-escape': 'off',
    'message': 'off' // 关闭默认导出项
  },
  // 语言风格
  parserOptions: {
    // 支持import
    sourceType: 'module'
  }
}
