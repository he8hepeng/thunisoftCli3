/*
 * @Author: HePeng
 * @Date: 2020-04-27 09:39:43
 * @Last Modified by: hepeng
 * @Last Modified time: 2020-07-10 21:03:14
 */
const webpack = require('webpack')
const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin') // 压缩css js html
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV) // 修复热更新
// const TerserPlugin = require("terser-webpack-plugin"); // 去除console debug
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 去除console debug
const ZipPlugin = require('zip-webpack-plugin') // 当需要手动打包 会自动生成一个zip的dist
// 选其一
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin') // dll优化
module.exports = {
  lintOnSave: true, // 是否lint检查 (建议开启)
  publicPath: './',
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath: 'index.html', // 修改打包的默认html文件路径
  filenameHashing: true, // 文件名哈希值 (当你不能使用默认html时 改为false)
  // 当您测试使用下载时 请删除Mock依赖 (main.js vue.config.js) 他会影响您的下载功能
  productionSourceMap: true, // false时 会加快您的打包速度 但无法在控制台定位错误（慎用）
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://localhost:8080', // 代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock' // 代理的路径
        },
        onProxyReq: function (proxyReq, req, res) {
          // 实在不知道代理后的路径，可以在这里打印出出来看看2
          console.log('原路径：' + req.originalUrl, '代理路径：' + req.path)
        }
      }
    },
    host: '0.0.0.0',
    port: '8080'
  },
  // 修复ie10 app.js报错问题
  transpileDependencies: ['normalize-url', 'mini-css-extract-plugin', 'prepend-http', 'sort-keys'], // 当您的依赖 需要通过babel显式转译时 放到这里
  chainWebpack: config => {
    // 移除 prefetch preload 插件 提高打包速度
    // config.plugins.delete('prefetch-index')
    // config.plugins.delete('preload-index')
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    config.resolve.alias // 自定义目录别名
      .set('@', resolvePath('src'))
      .set('@assets', resolvePath('src/assets'))
      .set('@common', resolvePath('src/components/common')) // 公共模块
    config.resolve.symlinks(true)
    // if (IS_PROD) {
    //   // 会生成 gz依赖压缩包 大大增加您的加载速度 (需要在nginx进行配置 https://jingyan.baidu.com/article/454316ab29d0c0f7a7c03a1f.html 选用 (不是想优化首屏加载速度 不建议使用))
    //   /** gzip 压缩 */
    //   config
    //     .plugin('compressionPlugin')
    //     .use(CompressionPlugin)
    //     .tap(() => [
    //       {
    //         test: /\.js$|\.html$|\.css/, // 匹配文件名
    //         threshold: 10240, // 超过10k进行压缩
    //         deleteOriginalAssets: false // 是否删除源文件
    //       }
    //     ])
    // }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    extract: IS_PROD, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。 生产环境下是 true，开发环境下是 false
    sourceMap: false // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
  },
  configureWebpack: (config) => {
    config.plugins.push(
      // （全局引用 引用后不在页面import）
      new webpack.ProvidePlugin({
        // Snap: 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js',
        // 'window.snapsvg': 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js',
        // $: 'jquery',
        // jQuery: 'jquery'
      }),
      new ZipPlugin({
        path: path.join(__dirname, './'),
        filename: 'dist.zip'
      }),
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
      }),
      // 将 dll 注入到 生成的 html 模板中
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        // dll 引用路径
        publicPath: './vendor',
        // dll最终输出的目录
        outputPath: './vendor'
      })
    )
    if (IS_PROD) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true // 生产环境自动删除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      )
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/css/common/variable.less') // 需要全局导入的less
      ]
    })
}

function resolvePath (dir) {
  return path.join(__dirname, dir)
}
