<template lang="pug">
  page
    div(:id='id')
</template>

<script>
import { Graph } from '@antv/g6'
import TableSankey from '@antv/g6/build/plugin.template.tableSankey'
import chartMixin from '@/common/chartMixin'
export default {
  mixins: [chartMixin],
  name: 'g6',
  data() {
    return {
      data: {},
      url: '/investment.json'
    }
  },
  methods: {
    init() {
      const sankeyPlugin = new TableSankey({
        table: this.data,
        onBeforeSankeyProcessorExecute(sankeyProcessor) {
          sankeyProcessor.nodeWidth(4)
          sankeyProcessor.nodePadding(16)
        },
        onBeforeRender: graph => {
          const width = graph.getWidth()
          graph.node({
            color: () => 'black',
            style: model => {
              const style = {
                lineWidth: 0
              }
              if (model.field === 'cap') {
                style.fillOpacity = 0
              }
              return style
            },
            label: model => {
              const label = {
                text:
                  model.field === 'cap'
                    ? '$ ' + model.fieldValue
                    : model.fieldValue,
                ...this.labelStyle
              }
              if (model.x > width / 2) {
                label.textAlign = 'right'
              } else {
                label.textAlign = 'left'
              }
              return label
            },
            labelOffsetX: model => {
              if (model.field === 'cap') {
                return 0
              }
              var labelGap = 8
              if (model.x > width / 2) {
                return -(model.x1 - model.x0) / 2 - labelGap
              }
              return (model.x1 - model.x0) / 2 + labelGap
            }
          })
          graph.edge({
            sourceOffset: ({ source, target }) => {
              if (target.indexOf('cap') !== -1) {
                var sourceItem = graph.find(source)
                var sourceLabel = sourceItem.getLabel()
                var sourceLabelBox = sourceLabel.getBBox()
                return sourceLabelBox.width + 10
              }
            },
            targetOffset: ({ target }) => {
              if (target.indexOf('cap') !== -1) {
                var targetItem = graph.find(target)
                var targetLabel = targetItem.getLabel()
                var targetLabelBox = targetLabel.getBBox()
                return targetLabelBox.width
              }
            },
            style: ({ source, target }) => {
              let stroke = '#333'
              if (source === 'groupTencent') {
                stroke = '#61C489'
              } else if (source === 'groupAlibaba') {
                stroke = '#E7AC45'
              } else if (source === 'groupAnt') {
                stroke = '#326DF6'
              }
              if (target.indexOf('cap') !== -1) {
                return {
                  lineWidth: 1,
                  lineDash: [1, 1]
                }
              }
              return {
                stroke,
                strokeOpacity: 0.6
              }
            }
          })
        },
        combine: ({ field, value, row }) => {
          if (field === 'cap') {
            return row.company + field + value
          }
          return field + value
        }
      })
      this.chart = new Graph({
        container: this.id,
        height: window.innerHeight - 100,
        fitView: 'cc',
        animate: true,
        plugins: [sankeyPlugin]
      })
    }
  }
}
</script>
