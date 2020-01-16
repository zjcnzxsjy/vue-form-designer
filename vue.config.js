const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  publicPath: "./",
  runtimeCompiler: true,
  devServer: {
    port: 8091,
  },
  lintOnSave: false,
  configureWebpack: config => {
    config.performance = {
      hints:'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js');
      }
    };
    // if (process.env.NODE_ENV === "production") {
    //   //为生产环境打包分析体积...
    //   //config.mode = "production";
    //   return {
    //     plugins: [
    //       new BundleAnalyzerPlugin({
    //         analyzerHost: '192.168.94.184',
    //         analyzerPort: 8999
    //       })
    //     ]
    //   }
    // }
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
    // if (process.env.NODE_ENV === "production") {
    //   config.plugin('webpack-bundle-analyzer')
    //   .use(BundleAnalyzerPlugin)
    // }
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ['json'],
        features: ['find', 'folding']
      }
    ])
  }
}