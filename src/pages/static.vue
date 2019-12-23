<template lang='pug'>
  page
    a(:href='href' title='img'): img(:src='src' alt='img')
</template>

<script>
export default {
  name: 'pptr',
  data() {
    return {
      href: `/${process.env.VUE_APP_NAME}`,
      src: `${
        process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_NAME
      }/${process.env.VUE_APP_ASSETS_DIR}/img/icons/apple-touch-icon.png`
    }
  }
}
</script>
