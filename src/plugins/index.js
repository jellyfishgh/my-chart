import components from './components'

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
