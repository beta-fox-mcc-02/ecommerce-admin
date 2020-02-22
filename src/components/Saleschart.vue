<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      totalPurchaseData: [],
      chartdata: {
        labels: '',
        datasets: [
          {
            label: 'Total Purchase Daily',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    hours () { return this.$store.state.weekly },
    products () { return this.$store.state.products }
  },
  methods: {
    getDate () {
      const weekly = []
      for (var i = 0; i < 7; i++) {
        var date = new Date().getDate() + i
        weekly.push(date)
      }
      this.$store.commit('setWeeklyDate', weekly)
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    setData () {
      this.products.forEach((product) => {
        this.totalPurchaseData.push([product.total, 0])
      })
    }
  },
  created () {
    this.fetchProducts()
    this.getDate()
    this.setData()
    this.chartdata.labels = this.hours
    this.chartdata.datasets[0].data = this.totalPurchaseData
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>

</style>
