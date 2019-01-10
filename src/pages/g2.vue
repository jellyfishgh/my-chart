<template lang="pug">
  page
    div(:id='id')
</template>

<script>
import { Chart } from '@antv/g2'
import chartMixin from '@/common/chartMixin'
import antvMixin from '@/common/antvMixin'
export default {
  mixins: [chartMixin, antvMixin('g2')],
  methods: {
    init() {
      const { id, xName, yName } = this
      const chart = new Chart({
        container: this.id,
        forceFit: true,
        height: 600
      })
      const positonValue = `${xName}*${yName}`
      chart.line().position(positonValue)
      chart
        .point()
        .position(positonValue)
        .size(4)
        .shape('circle')
        .style({
          stroke: '#fff',
          lineWidth: 1
        })
      this.chart = chart
    }
  }
}
</script>
