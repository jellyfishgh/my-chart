<template lang="pug">
  page
    svg(width="960" height="500" viewBox="-480 -250 960 500")
      circle(r="100" stroke="brown" stroke-opacity="0.5" fill="none")
      circle(r="200" stroke="steelblue" stroke-opacity="0.5" fill="none")
</template>

<script>
import * as d3 from 'd3'
const duration = 5000
export default {
  name: 'd3',
  data() {
    return {
      id: 'chart',
      chart: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const nodes = [
        ...d3.range(80).map(() => ({ type: 'a' })),
        ...d3.range(160).map(() => ({ type: 'b' }))
      ]
      const node = d3
        .select('svg')
        .append('g')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', 2.5)
        .attr('fill', ({ type }) => (type === 'a' ? 'brown' : 'steelblue'))
      d3.forceSimulation(nodes)
        .force('charge', d3.forceCollide().radius(5))
        .force('r', d3.forceRadial(({ type }) => (type === 'a' ? 100 : 200)))
        .on('tick', () =>
          node.attr('cx', ({ x }) => x).attr('cy', ({ y }) => y)
        )
    }
  }
}
</script>
