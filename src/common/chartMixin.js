import axios from 'axios'

export default {
  data() {
    return {
      id: 'chart',
      url: `${process.env.BASE_URL}${
        process.env.VUE_APP_ASSETS_DIR
      }/chart.json`,
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
      this.draw && this.draw()
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
