const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "./",
  runtimeCompiler: true,
  devServer: {
    port: 8091,
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude
        .add(resolve('./src/assets/svgIcon'))
        .end()
    config.module
      .rule('svg1')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
      .include
        .add(resolve('./src/assets/svgIcon'))
        .end()
  }
}