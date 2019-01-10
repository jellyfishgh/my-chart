<template lang="pug">
  page
    div(:id='id' style={height:'250px'})
</template>

<script>
import echarts from 'echarts'
import chartMixin from '@/common/chartMixin'
export default {
  mixins: [chartMixin],
  name: 'echarts',
  data() {
    return {
      data: [],
      option: {
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: []
      }
    }
  },
  methods: {
    init() {
      this.chart = echarts.init(document.getElementById(this.id))
    },
    draw() {
      const { labels, datasets } = this.data
      const option = { ...this.option }
      option.xAxis.data = labels
      option.series = datasets.map(item => ({
        ...item,
        data: item.values
      }))
      this.chart.setOption(option)
    }
  }
}
</script>
