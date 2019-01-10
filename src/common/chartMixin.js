import axios from 'axios'

export default Chart => ({
  data() {
    return {
      id: 'chart'
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    init() {
      const { data } = this
      this.chart = new Chart(`#${this.id}`, {
        ...this.option,
        data
      })
    },
    getData() {
      axios.get(this.url).then(body => {
        if ((body.statusText = 'OK')) {
          this.data = body.data
        }
      })
    }
  },
  watch: {
    data(v, oldV) {
      if (v !== oldV) {
        this.draw()
      }
    }
  }
})
