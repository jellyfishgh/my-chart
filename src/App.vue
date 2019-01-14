<template lang="pug">
  #app
    div(v-for='(page,index) of pages' :key='index')
      router-link(:to='`/${page}`') {{page}}
    router-view
</template>

<script>
import pages from '@/router/pages'
export default {
  name: 'app',
  data() {
    return {
      pages
    }
  }
}
</script>
