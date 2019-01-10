<template lang="pug">
  page
    div(:id='id')
</template>

<script>
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import chartMixin from '@/common/chartMixin'
export default {
  mixins: [chartMixin],
  name: 'frappe',
  data() {
    return {
      data: {},
      option: {
        title: 'My Awesome Chart',
        type: 'axis-mixed',
        height: 250,
        colors: ['#7cd6fd', '#743ee2']
      }
    }
  },
  methods: {
    init() {
      const { id, data = {}, option = {} } = this
      this.chart = new Chart(`#${id}`, {
        ...option,
        data
      })
    },
    draw() {
      this.chart.update(this.data)
    }
  }
}
</script>
