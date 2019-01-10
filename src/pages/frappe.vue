<template lang="pug">
  page
    div(:id='id')
</template>

<script>
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import chartMixin from '@/common/chartMixin'
export default {
  mixins: [chartMixin(Chart)],
  name: 'frappe',
  data() {
    return {
      data: {},
      chart: null,
      url: '/chart.json',
      option: {
        title: 'My Awesome Chart',
        type: 'axis-mixed',
        height: 600,
        colors: ['#7cd6fd', '#743ee2']
      }
    }
  },
  methods: {
    draw() {
      if (!this.cart) this.init()
      this.chart.update(this.data)
    }
  }
}
</script>
