const fs = require('fs')
const path = require('path')

const getAbsPath = dir => path.resolve(__dirname, `src/${dir}`)

const wCfg = (src, dist, fileName) => {
  const tplStr = `export default ['${fs
    .readdirSync(getAbsPath(src))
    .map(file => file.slice(0, file.indexOf('.')))
    .join('\', \'')}']`
  fs.writeFileSync(getAbsPath(`${dist}/${fileName}`), tplStr)
  console.log(`>> ${fileName} 创建成功`)
}

wCfg('pages', 'router', 'pages.js')
wCfg('components', 'plugins', 'components.js')
