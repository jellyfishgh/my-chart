<template lang="pug">
  .svg-icon(ref='icon')
    embed(v-if='type==="embed"' :src='icon' type='image/svg+xml')
    object(v-if='type==="object"' :data='icon' type='image/svg+xml')
    iframe(v-if='type==="iframe"' :src='icon' frameborder='0' height='100%' width='100%')
    svg(v-if='type==="svg"' :style='cptStyle')
      use(:xlink:href='`#${id}`')
</template>

<script>
import loadIcons from 'loadicons'
export default {
  name: 'svg-icon',
  // type:html,object,embed,iframe,svg
  // 默认内联html
  props: ['icon', 'color', 'type', 'id'],
  mounted() {
    if (['html', 'svg'].includes(this.type)) {
      this.loadSvg()
    }
  },
  computed: {
    cptStyle() {
      const style = {
        width: '100%',
        height: '100%'
      }
      if (this.color) style.fill = this.color
      return style
    }
  },
  methods: {
    loadSvg() {
      loadIcons(this.icon, (err, svg) => {
        if (err) {
          console.log(err)
          return
        }
        svg.style.display = 'block'
        if (this.type === 'svg') {
          svg.id = this.id
        } else if (this.type === 'html') {
          for (let attr in this.cptStyle) {
            svg.style[attr] = this.cptStyle[attr]
          }
          // loadicons中的逻辑: document.head.insertBefore(svg, null);
          // 添加引用的同一个dom后从head中去除
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
  width: 48px;
  height: 48px;
}
</style>

