const qs = require('qs')

const { name, version, description } = require('./package.json')
process.env.VUE_APP_NAME = name

const v = '1.4.8'
const plugin = 'Map3D'
const key = '2512e63c29a3be31d0719dd76a2e3d35'
process.env.VUE_APP_AMAP_API = `https://webapi.amap.com/maps${qs.stringify(
  { v, plugin, key },
  { addQueryPrefix: true }
)}`

const target = 'origin'

const inlineLimit = 1024

const proxy = ['api'].reduce(
  (x, y) => ({
    ...x,
    [`/${y}`]: {
      changeOrigin: true,
      ws: true,
      target
    }
  }),
  {}
)

const devServer = {
  open: true,
  host: '0.0.0.0',
  port: 8080,
  https: false,
  proxy
}

const publicPath = `/${name}/`
const outputDir = `dist/${name}`
const assetsDir = process.env.VUE_APP_ASSETS_DIR
const filenameHashing = true
const TEST = process.env.VUE_APP_IS_PROD === 'false'

const MANIFEST = 'manifest.json'

module.exports = {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave: true,
  productionSourceMap: TEST,
  filenameHashing,
  devServer,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0] = {
        ...args[0],
        minify: !TEST,
        version,
        test: process.env.NODE_ENV === 'production' && TEST,
        title: description
      }
      return args
    })
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: inlineLimit,
        name: `${assetsDir}/img/[name]${
          filenameHashing ? '.[hash:8]' : ''
        }.[ext]`
      })
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: '../report.html'
        })
      )
    }
  },
  css: {
    sourceMap: TEST
  },
  pwa: {
    workboxOptions: {
      swDest: `${assetsDir}/service-worker.js`,
      importsDirectory: assetsDir,
      importWorkboxFrom: 'local'
    },
    name: description,
    manifestPath: `${assetsDir}/${MANIFEST}`,
    iconPaths: {
      favicon32: `${assetsDir}/img/icons/favicon-32x32.png`,
      favicon16: `${assetsDir}/img/icons/favicon-16x16.png`,
      appleTouchIcon: `${assetsDir}/img/icons/apple-touch-icon-152x152.png`,
      maskIcon: `${assetsDir}/img/icons/safari-pinned-tab.svg`,
      msTileImage: `${assetsDir}/img/icons/msapplication-icon-144x144.png`
    }
  }
}
