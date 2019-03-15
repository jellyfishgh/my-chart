<template lang="pug">
  .svg-icon(ref='icon')
</template>

<script>
import loadIcons from 'loadicons'
export default {
  name: 'svg-icon',
  props: ['icon', 'color'],
  mounted() {
    this.loadSvg()
  },
  methods: {
    loadSvg() {
      loadIcons(this.icon, (err, svg) => {
        if (err) {
          console.log(err)
        } else {
          svg.style.display = 'block'
          if (this.color) {
            svg.style.fill = this.color
          }
          this.$refs.icon.appendChild(svg)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  display: inline-block;
  width: 44px;
}
</style>

