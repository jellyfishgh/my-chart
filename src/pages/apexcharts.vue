<template lang="pug">
  page
    div(:id='id' style={width:'800px', height:'600px'})
</template>

<script>
import ApexCharts from 'apexcharts'
import dayjs from 'dayjs'
export default {
  name: 'apexcharts',
  data() {
    return {
      id: 'apexcharts'
    }
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      const categories = new Array(9)
        .fill(0)
        .map((_, index) => dayjs().year() + index)
      const data = categories.map(() => Math.random())
      const options = {
        chart: {
          type: 'line'
        },
        series: [
          {
            name: 'sales',
            data
          }
        ],
        xaxis: {
          categories
        }
      }
      const element = document.querySelector(`#${this.id}`)
      const chart = new ApexCharts(element, options)
      chart.render()
    }
  }
}
</script>
