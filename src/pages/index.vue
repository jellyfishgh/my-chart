<template lang="pug">
  page
    div(v-for='(page,index) of pages' :key='index')
      router-link(:to='`/${page}`') {{page}}
</template>

<script>
import pages from '@/router/pages'
export default {
  name: 'index',
  data() {
    return {
      pages
    }
  }
}
</script>
