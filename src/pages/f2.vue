<template lang="pug">
  page
    canvas(:id='id')
</template>

<script>
import { Chart } from '@antv/f2'
import chartMixin from '@/common/chartMixin'
import antvMixin from '@/common/antvMixin'
export default {
  mixins: [chartMixin, antvMixin('f2')],
  methods: {
    init() {
      const { id, xName, yName } = this
      const chart = new Chart({
        id,
        pixelRatio: window.devicePixelRatio,
        height: 320,
        width: 800
      })
      chart
        .line()
        .position(`${xName}*${yName}`)
        .color(yName)
      this.chart = chart
    }
  }
}
</script>
