<template lang="pug">
  page
    i(v-for='(value,key) of img' :key='`i_${key}`' v-html='value' style={color:'red',fontSize:'128px'})
</template>

<script>
import { icon } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-regular-svg-icons'
import { faAlipay } from '@fortawesome/free-brands-svg-icons'
const icons = [faCoffee, faAngry, faAlipay]
export default {
  name: 'fa',
  data() {
    return {
      img: icons.reduce(
        (x, y) => ({
          ...x,
          [y.iconName]: icon(y).html[0]
        }),
        {}
      )
    }
  }
}
</script>
