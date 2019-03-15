<template lang="pug">
  page(:id='id')
</template>

<script>
const turf = require('@turf/turf')
import { Scene } from '@antv/l7/dist/l7.min' // @1.1.1 bug: can not import directly
import chartMixin from '@/common/chartMixin'

export default {
  mixins: [chartMixin],
  name: 'l7',
  data() {
    return {
      // chartMixin
      url: 'https://gw.alipayobjects.com/os/rmsportal/UEXQMifxtkQlYfChpPwT.txt',
      data: {}
    }
  },
  methods: {
    init() {
      this.chart = new Scene({
        id: this.id,
        mapStyle: 'dark',
        center: [116.2825, 39.9],
        pitch: 0,
        zoom: 4
      })
    },
    draw() {
      const { chart, data } = this
      chart.on('loaded', () => {
        const collections = data
          .split('\n')
          .slice(1)
          .map(item => item.split(','))
          .filter(row => row && row.length === 8 && row[0])
          .map(row =>
            turf.greatCircle(
              turf.point([row[4], row[5]]),
              turf.point([row[6], row[7]]),
              { npoints: 50 }
            )
          )
        chart
          .LineLayer({
            zIndex: 2
          })
          .source(turf.featureCollection(collections))
          .color('rgb(13,64,140)')
          .style({
            opacity: 0.6
          })
          .render()
      })
    }
  }
}
</script>
