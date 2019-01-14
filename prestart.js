const fs = require('fs')
const path = require('path')
const glob = require('glob')

const getAbsPath = dir => path.resolve(__dirname, `src/${dir}`)

// const getFiles = src =>
//   fs.readdirSync(getAbsPath(src)).map(file => file.slice(0, file.indexOf('.')))

const getFiles = src =>
  glob
    .sync(`src/${src}/*`)
    .map(file => file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.')))

const wCfg = (src, dist, fileName) => {
  const tplStr = `export default ['${getFiles(src).join('\', \'')}']`
  fs.writeFileSync(getAbsPath(`${dist}/${fileName}`), tplStr)
  console.log(`>> ${fileName} 创建成功`)
}

wCfg('pages', 'router', 'pages.js')
wCfg('components', 'plugins', 'components.js')
