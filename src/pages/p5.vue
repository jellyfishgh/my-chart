<template lang="pug">
  page(:id='id')
</template>

<script>
import p5 from 'p5'
export default {
  name: 'p5',
  data() {
    return {
      id: 'chart'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      new p5(p => {
        p.setup = () => {
          p.createCanvas(800, 800)
          p.background(128)
        }
        p.draw = function() {
          if (p.mouseIsPressed) {
            p.fill(60)
          } else {
            p.fill(200)
          }
          p.ellipse(p.mouseX, p.mouseY, 4, 4)
        }
      }, document.getElementById(this.id))
    }
  }
}
</script>
