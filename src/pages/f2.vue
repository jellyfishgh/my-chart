<template lang="pug">
  page
    canvas(:id='id' height='250' width='800')
</template>

<script>
import { Chart } from '@antv/f2'
import chartMixin from '@/common/chartMixin'
export default {
  mixins: [chartMixin],
  name: 'f2',
  data() {
    return {
      data: [],
      xName: 'time',
      yName: 'value'
    }
  },
  methods: {
    init() {
      const { id, data, xName, yName } = this
      const chart = new Chart({
        id,
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data)
      chart
        .line()
        .position(`${xName}*${yName}`)
        .color(yName)
      this.chart = chart
    },
    draw() {
      const { chart, xName, yName } = this
      const { labels, datasets } = this.data
      const data = labels.map((label, index) => ({
        [xName]: label,
        [yName]: datasets[0].values[index]
      }))
      chart.changeData(data)
    }
  }
}
</script>
