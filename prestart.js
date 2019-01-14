const fs = require('fs')
const path = require('path')
const glob = require('glob')

const { getFileName } = require('./src/utils/file')

const getAbsPath = dir => path.resolve(__dirname, `src/${dir}`)

const getFiles = src => glob.sync(`src/${src}/*`).map(getFileName)

const wCfg = (src, dist, fileName) => {
  const tplStr = `export default ['${getFiles(src).join('\', \'')}']`
  fs.writeFileSync(getAbsPath(`${dist}/${fileName}`), tplStr)
  console.log(`>> ${fileName} 创建成功`)
}

wCfg('pages', 'router', 'pages.js')
