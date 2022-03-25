
## 基于webpack搭建基本的vue-cli

### steps
* 基础篇
  + webpack：打包的工具
  + webpack-cli：为webpack提供命令行的
  + webpack-dev-server：开发环境修改代码重新打包
  + html-webpack-plugin：打包html
  + sass、sass-loader：可以将scss转换成css
  + css-loader：使webpack具有打包css的能力
  + mini-css-extract-plugin：可以将css代码打包成一个单独的css文件
  + @babel/core、babel-loader：转换语法的工具
  + @babel/preset-env：转换的一套现成规则
  + @babel/plugin-transform-runtime：转换async/await所需插件
  + progress-bar-webpack-plugin：构建进度条
* 打包vue
  + vue：Vue开发所需的依赖(v2.5.2)
  + vue-loader：解析.vue文件的loader(v15.9.8)
  + vue-template-compiler：解析vue中的模工具(v2.5.2)
  + @vue-babel-preset-jsx：支持解析vue中的jsx语法
* 优化
  + thread-loader：多进程打包，可以大大提高构建速度。在比较费时间的loader之前，比如babel-loader
  + cache-loader：缓存资源，提高二次构建速度
  + 开启热更新
  + exclude、include不处理、处理文件
  + css-minimizer-webpack-plugin：打包css压缩、去重代码
  + terser-webpack-plugin：打包压缩js代码
  + 摇树优化
  + 定位错误
    - dev：eval-cheap-module-source-map
    - prod：nosources-source-map
  + webpack-bundle-analyzer：打包体积分析
  + compression-webpack-plugin：打包提高构建速度
  + 小图片转换为base64
  + 合理配置hash
* 规范
  + eslint：Eslint的依赖包
  + eslint-config-airbnb-base：Eslint的现成方案
  + eslint-plugin-vue：Eslint vue的现成方案
  + eslint-plugin-import：支持Eslint拓展配置
  + eslint-webpack-plugin：将Eslint配置在webpack中的插件
  + husky：hucky所需的依赖
  + lint-staged：用来检测提交缓存区的代码的规范，如果不符合规范就阻止git commit
  + @commitlint/cli：规定git commit文本规范的依赖
  + @commitlint/config-conventional：规定git commit文本规范的拓展规则