// import components from './components'

const components = require
  .context('@/components/', false, /.vue$/)
  .keys()
  .map(key => key.replace(/.vue$/, '').slice(2))

let installed
const install = Vue => {
  if (installed) return
  installed = true
  components.map(name =>
    Vue.component(name, require(`@/components/${name}`).default)
  )
}

export default {
  install
}
