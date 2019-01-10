export default name => ({
  name,
  data() {
    return {
      data: [],
      xName: 'time',
      yName: 'value'
    }
  },
  methods: {
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
})
