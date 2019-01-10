import axios from 'axios'

export default {
  data() {
    return {
      id: 'chart',
      chart: null
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get(this.url).then(body => {
        if ((body.statusText = 'OK')) {
          this.data = body.data
        }
      })
    },
    update() {
      if (!this.cart) this.init()
      this.draw()
    }
  },
  watch: {
    data(v, oldV) {
      if (v !== oldV) {
        this.update()
      }
    }
  }
}
